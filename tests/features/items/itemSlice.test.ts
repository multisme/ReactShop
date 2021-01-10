import reducer, {
        fetchItems,
        getItems,
        getItemsFailure,
        getItemsSuccess,
} from 'features/items/itemsSlice'

describe('itemSlice', () => {
        describe('reducers', () => {
                const initialState = { loading: false, hasError: false, items: [] }

                it('sets loading true when fetchItems is pending', () => {
                        const state = reducer(initialState, getItems);
                        expect(state).toEqual({ loading: true , hasError: false, items: [] });
                });

                it('sets the list  when fetchItems is fulfilled', () => {
                        const action = { type: [fetchItems], payload: { items: [2, 3]} };
                        const state = reducer(initialState, action);
                        expect(state).toEqual({  loading: false , hasError: false, items: []});
                });


                it('sets loading false when fetchItems is rejected', () => {
                        const state = reducer(initialState, getItemsFailure);
                        expect(state).toEqual({  loading: false , hasError: true, items: []});
                });
                
        })
})

