import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export interface TeamIntroductionProps {
  onNext: () => void;
}

const teamMembers = [
  {
    name: 'Andrea Carolina Blangino',
    role: 'Instructora Principal',
    expertise: 'Especialista en Biocodificación con más de 15 años de experiencia',
    icon: User,
  },
  {
    name: 'Micho Tito Gordo y Cabezon',
    role: 'Terapeuta Senior',
    expertise: 'Experto en técnicas avanzadas de sanación energética',
    icon: Award,
  },
  {
    name: 'Dra. Jorge Pablo Rodríguez',
    role: 'Coordinadora Legal',
    expertise: 'Coordinador Integral y facilitador del aprendizaje',
    icon: BookOpen,
  },
];

/**
 * Componente que presenta al equipo del curso.
 *
 * @param props - Propiedades del componente
 * @returns Componente de presentación del equipo
 */
export default function TeamIntroduction({
  onNext,
}: TeamIntroductionProps): React.JSX.Element {
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
            Conoce al Equipo
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Tus Guías en este Viaje
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Un equipo de expertos apasionados que te acompañarán en cada paso de tu aprendizaje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mx-auto mb-4">
                  <member.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-sm text-emerald-600 mb-2">{member.role}</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {member.expertise}
                </p>
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
