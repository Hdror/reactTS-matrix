import Btn from '../components/btn'
import MyCard from '../components/my-card'
import ContactForm from '../components/contact-form'

export default function HomePage() {
    return (
        <section className='flex flex-col gap-8 items-center home-page-container'>
            <Btn maxWidth={150} variant='contained' label={`I'm a button`} />
            <div className="cards-container">
                <MyCard />
            </div>
            <div className="form-container">
                <ContactForm />
            </div>
        </section>
    )
}