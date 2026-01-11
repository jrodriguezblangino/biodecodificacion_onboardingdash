import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { localClient } from '@/api/localStorageClient';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import WelcomeSection from '@/components/onboarding/WelcomeSection';
import StepIndicator from '@/components/onboarding/StepIndicator';
import CourseOverview from '@/components/onboarding/CourseOverview';
import CoreValues from '@/components/onboarding/CoreValues';
import TeamIntroduction from '@/components/onboarding/TeamIntroduction';
import GettingStarted from '@/components/onboarding/GettingStarted';
import CompletionScreen from '@/components/onboarding/CompletionScreen';

interface Step {
  id: string;
  title: string;
}

interface User {
  email?: string;
  full_name?: string;
  [key: string]: unknown;
}

interface OnboardingProgress {
  id: string;
  completed_steps: string[];
  current_step: number;
  [key: string]: unknown;
}

const steps: Step[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'values', title: 'Values' },
  { id: 'team', title: 'Team' },
  { id: 'start', title: 'Get Started' },
];

/**
 * Página principal de onboarding para el curso de biocodificación.
 *
 * @returns Componente de página de onboarding
 */
export default function Onboarding(): React.JSX.Element {
  const [started, setStarted] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        const userData = await localClient.auth.me();
        if (userData) {
          setUser(userData);
        }
        // Si no hay usuario, el componente puede funcionar sin autenticación
        // usando un identificador de sesión
      } catch (e) {
        // User not logged in - no es crítico, puede continuar sin usuario
        console.error('Error fetching user:', e);
      }
    };
    fetchUser();
  }, []);

  const { data: progressData } = useQuery<OnboardingProgress | null>({
    queryKey: ['onboardingProgress', user?.email || 'anonymous'],
    queryFn: async (): Promise<OnboardingProgress | null> => {
      // El cliente local puede funcionar con o sin usuario
      const records = await localClient.entities.OnboardingProgress.filter({
        created_by: user?.email,
        user_id: user?.email,
      });
      return records[0] || null;
    },
    enabled: true, // Siempre habilitado, funciona con o sin usuario
  });

  useEffect(() => {
    if (progressData) {
      setCompletedSteps(progressData.completed_steps || []);
      setCurrentStep(progressData.current_step || 0);
      if (progressData.completed_steps?.length === steps.length) {
        setCompleted(true);
      }
    }
  }, [progressData]);

  const saveMutation = useMutation({
    mutationFn: async (data: {
      completed_steps: string[];
      current_step: number;
    }): Promise<{ id: string; [key: string]: unknown }> => {
      if (progressData?.id) {
        return localClient.entities.OnboardingProgress.update(progressData.id, data);
      } else {
        return localClient.entities.OnboardingProgress.create(data);
      }
    },
    onSuccess: (): void => {
      queryClient.invalidateQueries({ queryKey: ['onboardingProgress'] });
    },
  });

  const handleStart = (): void => {
    setStarted(true);
  };

  const handleNext = (stepId: string): void => {
    const newCompleted = [...completedSteps];
    if (!newCompleted.includes(stepId)) {
      newCompleted.push(stepId);
    }
    setCompletedSteps(newCompleted);

    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    // Guardar progreso siempre (funciona con o sin usuario)
    saveMutation.mutate({
      completed_steps: newCompleted,
      current_step: nextStep,
    });
  };

  const handleComplete = (): void => {
    const allSteps = steps.map((s) => s.id);
    setCompletedSteps(allSteps);
    setCompleted(true);

    // Guardar progreso siempre (funciona con o sin usuario)
    saveMutation.mutate({
      completed_steps: allSteps,
      current_step: steps.length,
    });
  };

  if (completed) {
    return (
      <CompletionScreen
        studentName={user?.full_name?.split(' ')[0]}
      />
    );
  }

  if (!started) {
    return (
      <WelcomeSection
        onStart={handleStart}
        studentName={user?.full_name?.split(' ')[0]}
      />
    );
  }

  const renderStep = (): React.JSX.Element => {
    switch (currentStep) {
      case 0:
        return <CourseOverview onNext={() => handleNext('overview')} />;
      case 1:
        return <CoreValues onNext={() => handleNext('values')} />;
      case 2:
        return <TeamIntroduction onNext={() => handleNext('team')} />;
      case 3:
        return <GettingStarted onComplete={handleComplete} />;
      default:
        return <CourseOverview onNext={() => handleNext('overview')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <StepIndicator
        steps={steps}
        currentStep={currentStep}
        completedSteps={completedSteps}
      />
      <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
    </div>
  );
}
