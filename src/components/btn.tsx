import { Button } from "@mui/material";

interface Props {
    label: string
    variant: 'text' | 'contained' | 'outlined'
}

export default function Btn(props: Props) {
    return (
        <Button variant={props.variant}>
            {props.label}
        </Button>
    )
}