import { useForm } from "react-hook-form";
import { InputLabel,TextField } from '@mui/material';

type FormInputs = {
    emailAddress: string
}

export default function ContactForm() {

    const { register, formState: { errors, touchedFields }, handleSubmit, } = useForm<FormInputs>({
        defaultValues: {
            emailAddress: ''
        },
        mode: 'onTouched'
    })

    return (
        <form>
<InputLabel>lklklk</InputLabel>
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
        </form>

    )
}