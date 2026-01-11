import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export interface StepIndicatorProps {
  steps: Array<{ id: string; title: string }>;
  currentStep: number;
  completedSteps: string[];
}

/**
 * Componente que muestra el indicador de progreso de los pasos.
 *
 * @param props - Propiedades del componente
 * @returns Componente de indicador de pasos
 */
export default function StepIndicator({
  steps,
  currentStep,
  completedSteps,
}: StepIndicatorProps): React.JSX.Element {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = completedSteps.includes(step.id);
            const isCurrent = index === currentStep;
            const isPast = index < currentStep;

            return (
              <React.Fragment key={step.id}>
                <div className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <motion.div
                      initial={false}
                      animate={{
                        scale: isCurrent ? 1.1 : 1,
                      }}
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        transition-all duration-300
                        ${
                          isCompleted
                            ? 'bg-emerald-600 text-white'
                            : isCurrent
                            ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-600'
                            : 'bg-slate-100 text-slate-400'
                        }
                      `}
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <span className="font-medium">{index + 1}</span>
                      )}
                    </motion.div>
                    <span
                      className={`
                        mt-2 text-xs font-medium text-center
                        ${isCurrent || isCompleted ? 'text-slate-800' : 'text-slate-400'}
                      `}
                    >
                      {step.title}
                    </span>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`
                      h-0.5 flex-1 mx-2 transition-colors duration-300
                      ${isPast || isCompleted ? 'bg-emerald-600' : 'bg-slate-200'}
                    `}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
