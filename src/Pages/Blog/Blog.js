import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <h1 className='fw-1 text-center'>BLOG</h1>
            <Container className='mt-5'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is cors</Accordion.Header>
                        <Accordion.Body>
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend. When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support.
                            <br />
                            <br />
                            <h5>Firebase Alternatives</h5>
                            <strong>1.Back4App : </strong>
                            Back4app is a reliable Firebase alternative that works with an amalgamation of open-source technologies. The platform is straightforward to use and has a low learning curve.
                            <br />
                            <strong>2.Parse : </strong>
                            Parse is a comprehensive application stack that will help you build applications faster. It is an open-source backend framework that is free to use and download. It is a terrific free Firebase alternative.
                            <br />
                            <strong>3.AWS Amplify : </strong>
                            AWS Amplify allows web and mobile developers to create full-stack applications with a set o fit-to-purpose tools and features.

                            Using AWS Amplify, it is possible to configure a backend in minutes, ship faster, and scale effortlessly. The platform integrates with other AWS services like Dynamo DB, Lambda, S3, Cognito, AppSync, etc.

                            Building an application using AWS Amplify is easy and involves steps like creating the backend, connecting it to the application, managing users, and creating the UI.
                            <br />
                            <strong>4.Backendless : </strong>
                            Backendless is a visual application development platform. It has been operating since 2012, and it is one of the first Backend as a Service solutions launched.

                            Using Backendless, it is possible to create realtime applications, location-aware apps, and mobile and web apps. The visual app builder makes the experience of developing apps intuitive, easy to manage, and fast.
                            <br />
                            <strong>5.Kuzzle : </strong>
                            Kuzzle recently updated its website and now offers two different products. The first one is an IoT suite designed to streamline the deployment of IoT applications. The second one is a backend to facilitate the development of web and mobile applications.

                            Both products are open-source and are great options for data management and IoT development. Using Kuzzle, you can create projects for Smart Cities, Smart Logistics, Smart Buildings, etc.
                            <br />
                            <strong>6.Supabase : </strong>
                            Supabase allows developers to build a backend in less than 2 minutes. It is an excellent Firebase alternative that works with open-source technologies and enables you to host an app on a self-host environment or directly with Supabase cloud.

                            The platform allows you to build realtime chat apps, SaaS products, web crawlers, ToDo lists, Kamban boards, website builders, etc. It supports multiple technologies, including Flutter, Angular, React, Vue, etc.
                            <br />

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How does the private route work?</Accordion.Header>
                        <Accordion.Body>
                            Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application. <br />
                            PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                        <Accordion.Body>
                            Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />
                            Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                            Node.js basically works on two concept-

                            Asynchronous,
                            Non-blocking I/O.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Blog;