import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Faq = () => {

    return (
        <Accordion className='p-5'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>How do I create a multilingual website?</Accordion.Header>
                <Accordion.Body>
                    The possibilities are endless! Theoretically, your website can now reach customers all over the world. And in many cases, it actually makes sense to create a website in two or more languages.

                    If you already have visitors from different countries, a multilingual customer base, or want to reach an even wider audience, you can easily create a multilingual website with Jimdo—clear, easy to understand, and with a modern design!

                    In this article, we’ll show you how to create a multilingual website in just four steps and give you some tips about websites in multiple languages.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How to create the perfect online shopping experience</Accordion.Header>
                <Accordion.Body>
                    Did you know that you can sell your products in different colors and sizes, and even offer personalizations such as greeting cards, engravings, or embroidery—all through your  online store? Give each outgoing order your personal touch, encouraging customers to come back next time and shop even more.

                    In this article, we’ll show you how to unleash the full potential of your online store with three practical features. It’s easy to implement—and worth it!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Website or Online Store Statistics: How to Check Your Traffic</Accordion.Header>
                <Accordion.Body>
                    Many of us browse through our website statistics and find the results interesting. We may even murmur an “mm” of appreciation or “oh” of surprise. But what concrete conclusions can you draw from the number of visitors? How can you optimize your website or get more store orders based on what you see?

                    In this post, we take a closer look at the traffic stats you can quickly view on your website, the numbers that show how your store is doing, and how to avoid some common misinterpretations.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>How do You Know if Your Website Needs a FAQ Page?</Accordion.Header>
                <Accordion.Body>
                    Your FAQ page acts as informative content that can bring in new organic traffic, while also helping visitors find the information they need quickly.

                    In addition, this section of your website works as a great table of contents with links to other important pages, like evergreen content and informative blog posts.

                    And, by having an easy-to-find FAQ page on your website, you’re making it easier for visitors and customers to get the information they need without having to contact your customer service team.

                    Think of your FAQ page as a content tool that works in the background to give you a boost in traffic and make it easy for others to see you as a knowledgeable resource.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Do FAQ Pages Really Work?</Accordion.Header>
                <Accordion.Body>
                    Yes, having Frequently Asked Question pages on your website really does work.

                    However, you need to have a plan on how to best approach the process.

                    Just adding content with a bunch of questions and answers isn’t the way to achieve long-term organic traffic success.

                    Like any other portion of your website, you need a solid strategy with the right keyword research, internal linking, and other best practices (more in the next section).

                    You should also have a firm understanding of content marketing and the needs of your target customer, too.

                    After all, your end goal is to give them the answer to their question while enticing them to purchase your product or schedule a service appointment.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Ask Us Anything</Accordion.Header>
                <Accordion.Body>
                    If you think you are in doubt of something about this website, feel free to share it with us. We are happily waiting for you!
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}



export default Faq;
