import Multiselect from 'multiselect-react-dropdown';
import { places } from './places';

export default function Drops(props) {

    const state = {
        options: places
    };

    return (
    <>
        <Multiselect
        options={state.options}
        placeholder={props.place ? '' : 'Selecione...'}
        groupBy="cat"
        displayValue="key"
        selectionLimit={1}
        selectedValues={props.place ? [{key: props.place}] : []}
        onSelect={(selectedItem) => {
            props.setPlace(selectedItem[0].key)
        }}
        onRemove={() => {
            props.setPlace('')
        }}
        />
    </>
    );
};
