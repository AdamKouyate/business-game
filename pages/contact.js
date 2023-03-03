//import { createClient } from '@supabase/supabase-js'
//  import { supabase } from './../lib/supabaseClient';




export default function Contact({ contacts }) {
    // console.log(`contacts: ${contacts}`);
    return (
        <>
            {contacts?.map((contact => {
                return (
                    <>
                        <p>{contact.firstname}</p>
                        <p>{contact.lastname}</p>
                    </>
                )
            }))}
            <div className='container-fluid section1 bg-teal-100 border-t-4 border-teal-500'>
                <div>
                    <p className='title'>LA POUDREUSE</p>
                </div>
            </div>
            <div className='container contact-block'>
                <div className='society'>
                    La Poudreuse
                </div>
                <div className='info'>
                    Slogan : La Qualité de la Trace à chaque Virage !
                </div>
                <div className='info'>
                    +33 (0) 6 43 85 42 74
                    nahel.verdier@edu.ece.fr
                </div>
            </div>
        </>
    )
}