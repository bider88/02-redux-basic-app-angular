import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const multiplicate = createAction('[Counter Component] Multiplicate', props<{num: number}>() );
export const division = createAction('[Counter Component] Division', props<{num: number}>() );
export const reset = createAction('[Counter Component] Reset');
