import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export interface CourseOverviewProps {
  onNext: () => void;
}

const highlights = [
  {
    icon: BookOpen,
    title: '12 Módulos Centrales',
    description: 'Curriculum completo que cubre los fundamentos de la biocodificación hasta las técnicas avanzadas de sanación'
  },
  {
    icon: Clock,
    title: 'Aprendizaje Adaptativo',
    description: 'Estudia a tu propio ritmo con acceso vitalicio a todos los materiales'
  },
  {
    icon: Award,
    title: 'Certificación',
    description: 'Recibe un certificado acreditado al completar exitosamente el curso'
  },
  {
    icon: Users,
    title: 'Soporte de Comunidad',
    description: 'Únete a una comunidad vibrante de sanadores y practicantes'
  }
];

/**
 * Componente que muestra una visión general del curso.
 *
 * @param props - Propiedades del componente
 * @returns Componente de visión general del curso
 */
export default function CourseOverview({
  onNext,
}: CourseOverviewProps): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-28 pb-12 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-4"
          >
            Visión General del Curso
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Lo que te espera
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Un programa transformador diseñado para desbloquear tu potencial de sanación a través 
            de la ciencia de la biocodificación y la terapia de energía.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl font-medium mb-4">Tu Viaje de Transformación</h3>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            De entender los fundamentos de la sanación de energía hasta dominar técnicas avanzadas de biocodificación,
            te convertirás en un practicante confiado.  
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-white/10 rounded-full">Fundamentos de Energía</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">Técnicas de Biocodificación</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">Práctica con Clientes</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">Certificación</span>
          </div>
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button 
            onClick={onNext}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full group"
          >
            Continuar
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
