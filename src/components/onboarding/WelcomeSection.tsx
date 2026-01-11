import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface WelcomeSectionProps {
  onStart: () => void;
  studentName?: string;
}

/**
 * Componente de bienvenida inicial del onboarding.
 *
 * @param props - Propiedades del componente
 * @returns Componente de bienvenida
 */
export default function WelcomeSection({
  onStart,
  studentName,
}: WelcomeSectionProps): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Sparkles className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-light text-slate-800 mb-6"
        >
          {studentName ? `¡Bienvenido, ${studentName}!` : '¡Bienvenido!'}
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-slate-600 mb-12 leading-relaxed"
        >
          Estás a punto de embarcarte en un viaje transformador hacia el dominio de la biocodificación 
          y la terapia de sanación. Este breve recorrido te ayudará a familiarizarte con el curso y 
          prepararte para tu aprendizaje.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={onStart}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full group text-lg"
          >
            Comenzar
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
