import {useRef} from 'react';

interface NewItemProps {
    handleClick: (text: string) => void
    placeholder: string
}

const NewItem = ({handleClick, placeholder}: NewItemProps) => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    const onClick = () => {

        if (inputRef.current) {
            handleClick(inputRef.current.value);
            inputRef.current.value = '';
        }
    }

    return (
        <>
            <input
                type="text"
                placeholder={placeholder}
                ref={inputRef}
            />
            <button onClick={onClick}>Add todo</button>
        </>
    );
};

export default NewItem;