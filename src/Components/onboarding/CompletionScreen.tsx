import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface CompletionScreenProps {
  studentName?: string;
}

/**
 * Componente de pantalla de finalización del onboarding.
 *
 * @param props - Propiedades del componente
 * @returns Componente de finalización
 */
export default function CompletionScreen({
  studentName,
}: CompletionScreenProps): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-8 h-8 text-emerald-400" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-light text-slate-800 mb-6"
        >
          ¡Felicidades{studentName ? `, ${studentName}` : ''}!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-slate-600 mb-8 leading-relaxed"
        >
          Has completado el proceso de onboarding. Estás listo para comenzar tu viaje 
          de transformación con el curso de Biocodificación y Terapia de Sanación.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-slate-200"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            ¿Qué sigue?
          </h3>
          <ul className="text-left space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Explora el primer módulo del curso</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Únete a la comunidad de estudiantes</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Establece tu horario de estudio</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full group text-lg"
            onClick={() => {
              window.open(
                'https://my.visme.co/view/koe8yr8v-bienvenida-biodecodificacion-andrea-blangino',
                '_blank',
                'noopener,noreferrer'
              );
            }}
          >
            Descargar PDF de Bienvenida
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
