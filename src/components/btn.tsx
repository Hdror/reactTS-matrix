import { Button } from "@mui/material";
interface BtnProps {
    label: string
    variant: 'text' | 'contained' | 'outlined',
    maxWidth?: number
}

const Btn = (props: BtnProps) => {
    return (
        <Button style={{maxWidth:`${props.maxWidth}px`}} size="medium" variant={props.variant}>
            {props.label}
        </Button>
    )
}

export default Btn