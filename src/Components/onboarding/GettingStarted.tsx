import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export interface GettingStartedProps {
  onComplete: () => void;
}

const steps = [
  {
    id: 'explore',
    title: 'Explora el Contenido',
    description: 'Navega por los módulos y familiarízate con la estructura del curso',
  },
  {
    id: 'schedule',
    title: 'Establece tu Ritmo',
    description: 'Crea un horario de estudio que se adapte a tu vida',
  },
  {
    id: 'practice',
    title: 'Practica Regularmente',
    description: 'La práctica constante es clave para dominar estas técnicas',
  },
  {
    id: 'connect',
    title: 'Conéctate con la Comunidad',
    description: 'Únete a las discusiones y comparte tu progreso',
  },
];

/**
 * Componente que muestra los pasos para comenzar.
 *
 * @param props - Propiedades del componente
 * @returns Componente de pasos para comenzar
 */
export default function GettingStarted({
  onComplete,
}: GettingStartedProps): React.JSX.Element {
  const [checkedSteps, setCheckedSteps] = useState<string[]>([]);

  const handleToggle = (stepId: string): void => {
    setCheckedSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-28 pb-12 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4"
          >
            Comencemos
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Pasos para Comenzar
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Sigue estos pasos para aprovechar al máximo tu experiencia de aprendizaje.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {steps.map((step, index) => {
            const isChecked = checkedSteps.includes(step.id);
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`p-6 border-2 transition-all duration-300 cursor-pointer ${
                    isChecked
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-slate-200 hover:border-emerald-300'
                  }`}
                  onClick={() => handleToggle(step.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Checkbox
                        checked={isChecked}
                        onChange={() => handleToggle(step.id)}
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-slate-800">{step.title}</h3>
                        {isChecked && (
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                        )}
                      </div>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            onClick={onComplete}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full group"
          >
            Completar Onboarding
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
