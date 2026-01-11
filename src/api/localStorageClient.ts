/**
 * Cliente local para gestión de onboarding usando localStorage.
 * 
 * Esta implementación reemplaza base44 y funciona completamente
 * en el cliente sin necesidad de backend.
 */

interface User {
  email?: string;
  full_name?: string;
  id?: string;
  [key: string]: unknown;
}

interface OnboardingProgress {
  id: string;
  completed_steps: string[];
  current_step: number;
  created_at?: string;
  updated_at?: string;
  [key: string]: unknown;
}

/**
 * Genera un ID único para el progreso basado en el usuario.
 *
 * @param userIdentifier - Identificador único del usuario
 * @returns ID del progreso
 */
function getProgressId(userIdentifier: string): string {
  return `onboarding_progress_${userIdentifier}`;
}

/**
 * Obtiene un identificador único del usuario.
 * Puede ser email, ID, o un identificador de sesión.
 *
 * @param user - Datos del usuario (opcional)
 * @returns Identificador único del usuario
 */
function getUserIdentifier(user?: User | null): string {
  if (user?.email) {
    return user.email;
  }
  if (user?.id) {
    return user.id;
  }
  // Si no hay usuario, usa un identificador de sesión
  let sessionId = sessionStorage.getItem('onboarding_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    sessionStorage.setItem('onboarding_session_id', sessionId);
  }
  return sessionId;
}

export const localClient = {
  auth: {
    /**
     * Obtiene la información del usuario.
     * 
     * En una implementación real, esto podría recibir el usuario
     * desde props o desde el contexto de la página padre.
     *
     * @returns Promise con los datos del usuario o null
     */
    async me(): Promise<{
      email: string;
      full_name: string;
      [key: string]: unknown;
    } | null> {
      // Intenta obtener el usuario desde localStorage
      const storedUser = localStorage.getItem('onboarding_user');
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser) as User;
          // Asegurar que tenga los campos requeridos
          if (user.email && user.full_name) {
            return {
              email: user.email,
              full_name: user.full_name,
              ...user,
            };
          }
        } catch {
          // Si hay error parseando, retorna null
        }
      }
      
      // Si no hay usuario almacenado, retorna null
      // El componente puede funcionar sin usuario autenticado
      return null;
    },
    
    /**
     * Establece el usuario actual.
     *
     * @param user - Datos del usuario
     */
    setUser(user: User): void {
      localStorage.setItem('onboarding_user', JSON.stringify(user));
    },
    
    /**
     * Limpia el usuario almacenado.
     */
    clearUser(): void {
      localStorage.removeItem('onboarding_user');
    },
  },
  
  entities: {
    OnboardingProgress: {
      /**
       * Filtra registros de progreso de onboarding.
       *
       * @param filter - Filtro para buscar registros
       * @returns Promise con array de registros
       */
      async filter(filter: {
        created_by?: string;
        user_id?: string;
        [key: string]: unknown;
      }): Promise<
        Array<{
          id: string;
          completed_steps: string[];
          current_step: number;
          [key: string]: unknown;
        }>
      > {
        const userIdentifier = filter.created_by || filter.user_id || getUserIdentifier();
        const progressId = getProgressId(userIdentifier);
        const stored = localStorage.getItem(progressId);
        
        if (stored) {
          try {
            const progress = JSON.parse(stored) as OnboardingProgress;
            return [progress];
          } catch {
            return [];
          }
        }
        
        return [];
      },
      
      /**
       * Crea un nuevo registro de progreso.
       *
       * @param data - Datos del progreso
       * @returns Promise con el registro creado
       */
      async create(data: {
        completed_steps: string[];
        current_step: number;
        [key: string]: unknown;
      }): Promise<{
        id: string;
        [key: string]: unknown;
      }> {
        const identifier = getUserIdentifier();
        const progressId = getProgressId(identifier);
        const now = new Date().toISOString();
        
        const progress: OnboardingProgress = {
          ...data,
          id: progressId,
          completed_steps: data.completed_steps || [],
          current_step: data.current_step || 0,
          created_at: now,
          updated_at: now,
        };
        
        localStorage.setItem(progressId, JSON.stringify(progress));
        return progress;
      },
      
      /**
       * Actualiza un registro de progreso existente.
       *
       * @param id - ID del registro
       * @param data - Datos a actualizar
       * @returns Promise con el registro actualizado
       */
      async update(
        id: string,
        data: {
          completed_steps?: string[];
          current_step?: number;
          [key: string]: unknown;
        }
      ): Promise<{
        id: string;
        [key: string]: unknown;
      }> {
        const stored = localStorage.getItem(id);
        const existing: OnboardingProgress = stored
          ? (JSON.parse(stored) as OnboardingProgress)
          : {
              id,
              completed_steps: [],
              current_step: 0,
            };
        
        const updated: OnboardingProgress = {
          ...existing,
          ...data,
          updated_at: new Date().toISOString(),
        };
        
        localStorage.setItem(id, JSON.stringify(updated));
        return updated;
      },
      
      /**
       * Elimina el progreso almacenado.
       *
       * @param userIdentifier - Identificador del usuario (opcional)
       */
      clearProgress(userIdentifier?: string): void {
        const identifier = userIdentifier || getUserIdentifier();
        const progressId = getProgressId(identifier);
        localStorage.removeItem(progressId);
      },
    },
  },
};
