import { SubmitHandler, useForm } from "react-hook-form";
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface FormInputs {
    emailAddress: string
}


export default function ContactForm() {

    const { register, formState: { errors, touchedFields }, handleSubmit, } = useForm<FormInputs>({
        defaultValues: {
            emailAddress: ''
        },
        mode: 'onTouched'
    })

    const onSubmit: SubmitHandler<FormInputs> = data => console.log(data, touchedFields);

    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
                {...register
                    ("emailAddress",
                        {
                            required: 'Email is required',
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Invalid email address"
                            }
                        })}
                helperText={errors.emailAddress ? errors.emailAddress.message : null}
                size="small"
                placeholder="example@example.com"
                error={!!errors.emailAddress}
                fullWidth
                required
                title="email address"
                label='email address'
                variant="outlined"
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </form>

    )
}