import './MultiSelect.css';
import { CheckBoxSelection, Inject, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';

function MultiSelect(props) {
    const fields = { value: 'id', id: 'id', text: 'name' }
    const onChange = (params) => {
        props.onChange(params.value)
    }
    return (
        <div id="MultiSelect">
            <MultiSelectComponent
                onChange={onChange}
                id="checkbox"
                dataSource={props.options}
                fields={fields}
                placeholder={"Select " + props.type}
                mode="CheckBox">
                <Inject services={[CheckBoxSelection]} />
            </MultiSelectComponent>
        </div>
    );
}

export default MultiSelect;

