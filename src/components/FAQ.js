import react, {useEffect} from 'react';
import '../scss/FAQ.scss';

function FAQ(){

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[])

    return(
        <div className="faq">
            <h1>FAQ</h1>
            <div>
                <h2>Q: Why is there a deposit fee? Is the deposit refundable?</h2>
                <h3>A: No, it is not refundable. The reasoning for a deposit fee is to book and hold your spot in my calender. If a client decides to cancel last minute, they blocked out my time that I could have used to book another client. The deposit will only be fully refunded if I do not show up for a session.</h3>
            </div>
            <div>
                <h2>Q: Is there a travel fee?</h2>
                <h3>A: I do charge a travel fee if I have to travel over 15 miles from my current location. You can email me for more questions about travel fees for your specific location.</h3>
            </div>
            <div>
                <h2>Q: What if it’s raining?</h2>
                <h3>A: If we can’t shoot due to weather conditions, we can use your deposit to reschedule. Please, consult with me if you decide to reschedule; if you simply do not show up, your deposit will not be refunded. </h3>
            </div>
            <div>
                <h2>Q: Why don’t I get all the images?</h2>
                <h3>A: I prefer quality over quantity. I always look for the most flattering photos of my clients; some photos from the session can be blurry, and most will be repeats. I always do my best to give the most high-quality photos that also have the most variety when it comes to poses and angles.</h3>
            </div>
            <div>
                <h2>Q: What if I don’t want my photos posted on your social media </h2>
                <h3>A: You can contact me and let me know this is the case. The majority of my incoming business stems from social media posts, so please make it clear that this is what you want before the shoot. </h3>
            </div>
            <div>
                <h2>Q: Can I post the photos on my social media accounts?</h2>
                <h3>A: Any photos you recieve can be posted. You may not manipulate the photos any differently than how they looked when you recieved them (other than cropping). </h3>
            </div>
            <div>
                <h2>Q: Do you store our images?</h2>
                <h3>A: I clean out my files after 2 months. I suggest you back-up your photos when you recieve them; in case they ever get lost.</h3>
            </div>
            <div>
                <h2>Q: Do you give RAW files?</h2>
                <h3>A: No. There are a number of reasons why I, personally, choose not to give RAW images. It comes down to the way I like my work to be reflected. I feel like unedited photos misrepresent my art and my business. </h3>
            </div>
            <div>
                <h2>Q: I’m awkward and not an experienced model. Can you help me?</h2>
                <h3>A: Of course! I promise to make your session as smooth as possible. I provide posing tips and gentle guidance, so you can be feeling like a pro model in no time!</h3>
            </div>
            <div>
                <h2>Q: I want a certain shot for my wedding. Will you do it?</h2>
                <h3>A: If you come across a pose you like, feel free to send it my way for ideas via email. </h3>
            </div>
            <p>*For any other questions, please email me</p>
        </div>
    )
}

export default FAQ;