import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export interface CoreValuesProps {
  onNext: () => void;
}

const values = [
  {
    icon: Heart,
    title: 'Compasión',
    description: 'Aprenderás a trabajar con el corazón, entendiendo que cada persona tiene su propio viaje de sanación.',
    color: 'from-rose-100 to-pink-100',
    iconColor: 'text-rose-600',
  },
  {
    icon: Shield,
    title: 'Integridad',
    description: 'Mantendremos los más altos estándares éticos en todas nuestras prácticas y enseñanzas.',
    color: 'from-blue-100 to-cyan-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Formarás parte de una red de apoyo donde todos crecemos y aprendemos juntos.',
    color: 'from-emerald-100 to-teal-100',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Lightbulb,
    title: 'Excelencia',
    description: 'Nos comprometemos a proporcionar educación de la más alta calidad en cada módulo.',
    color: 'from-amber-100 to-yellow-100',
    iconColor: 'text-amber-600',
  },
];

/**
 * Componente que muestra los valores fundamentales del curso.
 *
 * @param props - Propiedades del componente
 * @returns Componente de valores fundamentales
 */
export default function CoreValues({
  onNext,
}: CoreValuesProps): React.JSX.Element {
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
            className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4"
          >
            Nuestros Valores
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Lo que nos guía
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Estos valores fundamentales forman la base de todo lo que enseñamos y practicamos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <value.icon className={`w-7 h-7 ${value.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 text-lg">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

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
