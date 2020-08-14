import { createAction, props } from '@ngrx/store';


export const limpiarPendientes= createAction('[TODO] Limpiar PENDIENTES');


export const limpiarTodos = createAction('[TODO] Limpiar TODOS', props<{ numeros: number }>());


export const crear = createAction(
    '[TODO] Crea Todo',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: string }>()
);


export const borrar = createAction(
    '[TODO] Borrar',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] Toggle TodoAll',
    props<{ completado: boolean }>()
);