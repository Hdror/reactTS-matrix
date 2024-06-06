import { Button } from "@mui/material";
interface BtnProps {
    label: string
    variant: 'text' | 'contained' | 'outlined'
}

const Btn = (props:BtnProps) => {
    return (
        <Button variant={props.variant}>
            {props.label}
        </Button>
    )
}

export default Btn