import { createAction, props } from '@ngrx/store';

// Argumentos: Todas, activas, completadas (menú del footer)
export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: filtrosValidos}>()
);