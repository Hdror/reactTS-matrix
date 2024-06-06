import { SubmitHandler, useForm } from "react-hook-form";
import { InputLabel, TextField } from '@mui/material';

interface FormInputs  {
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel >lklklk</InputLabel>
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
                placeholder="enter email address"
                error={!!errors.emailAddress}
                fullWidth
                required
                title="email address"
                label='email address'
                variant="outlined"
            />
            <button type="submit">Send</button>
        </form>

    )
}