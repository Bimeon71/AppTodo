import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crea Todo',
    props<{ texto: string}>()
);

// Cambia el valor completado
export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number}>()
);

// Editar el texto
export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: string}>()
);

// Borrar una tarea
export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number}>()
);

// Marcar/desmarcar todos de golpe
export const toggleAll = createAction(
    '[TODO] Borrar Todo',
    props<{ completado: boolean}>()
);

export const limpiarCompletados = createAction(
    '[TODO] Limpiar Todo'
);
