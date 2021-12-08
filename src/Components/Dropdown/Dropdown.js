// Libs
import Multiselect from 'multiselect-react-dropdown';

// dictionary in which contains options and its categories to select
import { places } from './places';

export default function Drops(props) {

    // keeps the options to select
    const state = {
        options: places
    };

    // placeholder changes depending if the box refers to the current position or the place to go
    // groupBy groups options into cateories
    // limit of 1 option each time
    // onSelect changes the variable hereC1 or whereC1 to the value selected
    // onRemove changes the variable hereC1 or whereC1 to None
    return (
    <>
        <Multiselect
        options={state.options}
        placeholder={props.place ? '' : (props.placeholder === 'atual' ? 'Selecione onde está' : 'Selecione seu destino')}
        groupBy="cat"
        displayValue="key"
        selectionLimit={1}
        selectedValues={props.place ? [{key: props.place}] : []}
        onSelect={(selectedItem) => {
            props.setPlace(selectedItem[0].key);
        }}
        onRemove={() => {
            props.setPlace('')
        }}
        />
    </>
    );
};
