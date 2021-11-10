import Multiselect from 'multiselect-react-dropdown';

export default function Drops(props) {

    const state = {
        options: [
            {key: 'Arturo', cat:'Professores'},
            {key: 'Larissa', cat:'Professores'},
            {key: 'MT02', cat:'Salas'},
            {key: 'MT25', cat:'Salas'}
        ]
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
