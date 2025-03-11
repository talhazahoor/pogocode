const FAQ = require("../models/FAQ");
const blogs = [
    {
        id: "1",
        title: "Introduction to GraphQL",
        slug: "introduction-to-graphql",
        content: `
            <h2>What is GraphQL?</h2>
            <p>GraphQL is a <strong>powerful</strong> query language for APIs that provides a more flexible and efficient way to interact with data sources.</p>
            
            <h3>Why Was GraphQL Created?</h3>
            <p>Facebook developed GraphQL in 2012 to address the limitations of REST APIs. REST APIs often return too much or too little data, leading to inefficiencies. GraphQL solves this problem by allowing clients to request only the data they need.</p>

            <h3>How Does GraphQL Work?</h3>
            <p>GraphQL allows developers to define schemas that specify the types of data available in an API. Clients send queries to request specific fields, ensuring that only the necessary data is retrieved.</p>

            <h3>Advantages of GraphQL</h3>
            <ul>
                <li><strong>Efficient Data Fetching:</strong> Clients receive only the data they request, reducing bandwidth usage.</li>
                <li><strong>Strongly Typed Schema:</strong> Ensures data integrity and consistency.</li>
                <li><strong>Single Endpoint:</strong> Unlike REST, which has multiple endpoints, GraphQL uses a single endpoint for all requests.</li>
                <li><strong>Real-time Data with Subscriptions:</strong> Supports real-time updates through WebSocket connections.</li>
            </ul>

            <h3>Getting Started with GraphQL</h3>
            <p>To use GraphQL, you need to define a schema, set up a resolver, and create a query to fetch data. Here’s a basic example of a GraphQL query:</p>
            <pre>
            query {
                user(id: "1") {
                    name
                    email
                }
            }
            </pre>
            <p>This query retrieves the user's name and email based on their ID.</p>

            <h3>Conclusion</h3>
            <p>GraphQL is an innovative approach to API design that enhances flexibility and efficiency. Whether you're building a small application or a large-scale system, GraphQL can significantly improve data management.</p>
        `,
        image: "http://wow.com/graphql-intro.jpg",
        author: "John Doe",
        createdAt: "2025-03-10",
    },
    {
        id: "2",
        title: "Why Choose GraphQL Over REST?",
        slug: "why-choose-graphql-over-rest",
        content: `
            <h2>GraphQL vs REST: Which One is Better?</h2>
            <p>For years, REST has been the standard for building APIs, but GraphQL is emerging as a more flexible and efficient alternative. Let’s compare these two approaches.</p>

            <h3>Understanding REST</h3>
            <p>REST (Representational State Transfer) is an architectural style for APIs that relies on HTTP methods like GET, POST, PUT, and DELETE.</p>

            <h3>Limitations of REST</h3>
            <ul>
                <li><strong>Over-fetching Data:</strong> REST endpoints often return more data than needed, increasing bandwidth usage.</li>
                <li><strong>Under-fetching Data:</strong> Sometimes, multiple requests are needed to retrieve related data.</li>
                <li><strong>Multiple Endpoints:</strong> REST APIs require different endpoints for different resources.</li>
            </ul>

            <h3>Why GraphQL is a Better Choice</h3>
            <p>GraphQL overcomes the limitations of REST by allowing clients to specify exactly what data they need.</p>
            <ul>
                <li><strong>Single Endpoint:</strong> GraphQL uses a single URL for all queries.</li>
                <li><strong>Efficient Queries:</strong> Clients get precisely the data they request, reducing payload size.</li>
                <li><strong>Flexible Data Fetching:</strong> GraphQL allows complex queries with nested data relationships.</li>
            </ul>

            <h3>GraphQL Example</h3>
            <pre>
            query {
                post(id: "10") {
                    title
                    author {
                        name
                    }
                }
            }
            </pre>

            <h3>Conclusion</h3>
            <p>GraphQL is a more modern approach to building APIs, making data fetching more efficient and flexible compared to REST.</p>
        `,
        image: "http://example.com/graphql-vs-rest.jpg",
        author: "Jane Smith",
        createdAt: "2025-03-09",
    },
    {
        id: "3",
        title: "Getting Started with Apollo Client",
        slug: "getting-started-with-apollo-client",
        content: `
            <h2>What is Apollo Client?</h2>
            <p>Apollo Client is a powerful tool that simplifies GraphQL integration in frontend applications.</p>

            <h3>Why Use Apollo Client?</h3>
            <ul>
                <li><strong>Easy State Management:</strong> Apollo Client manages local and remote state efficiently.</li>
                <li><strong>Caching:</strong> Built-in caching improves performance.</li>
                <li><strong>Real-time Updates:</strong> Supports GraphQL subscriptions for live data.</li>
            </ul>

            <h3>Setting Up Apollo Client</h3>
            <p>To install Apollo Client in a React project, run:</p>
            <pre>npm install @apollo/client graphql</pre>

            <h3>Basic Usage</h3>
            <pre>
            import { ApolloClient, InMemoryCache } from "@apollo/client";
            const client = new ApolloClient({
                uri: "https://your-graphql-endpoint.com",
                cache: new InMemoryCache()
            });
            </pre>

            <h3>Conclusion</h3>
            <p>Apollo Client is a great choice for integrating GraphQL into modern applications.</p>
        `,
        image: "http://example.com/apollo-client.jpg",
        author: "Alice Johnson",
        createdAt: "2025-03-08",
    },
    {
        id: "4",
        title: "Advanced GraphQL Features",
        slug: "advanced-graphql-features",
        content: `
            <h2>Exploring Advanced GraphQL Features</h2>
            <p>Beyond basic queries and mutations, GraphQL offers powerful features like subscriptions, directives, and fragments.</p>

            <h3>GraphQL Subscriptions</h3>
            <p>Subscriptions allow real-time updates via WebSockets:</p>
            <pre>
            subscription {
                newMessage {
                    content
                    sender
                }
            }
            </pre>

            <h3>GraphQL Directives</h3>
            <p>Directives modify query behavior. Example:</p>
            <pre>
            query {
                user(id: "5") {
                    name
                    email @include(if: true)
                }
            }
            </pre>

            <h3>GraphQL Fragments</h3>
            <p>Fragments allow query reuse:</p>
            <pre>
            fragment userDetails on User {
                id
                name
                email
            }
            query {
                user(id: "5") {
                    ...userDetails
                }
            }
            </pre>

            <h3>Conclusion</h3>
            <p>These advanced GraphQL features make APIs even more powerful and flexible.</p>
        `,
        image: "http://example.com/advanced-graphql.jpg",
        author: "Bob Williams",
        createdAt: "2025-03-07",
    }
];
const resolvers = {
    Query: {
        faqs: () => [{id: "1", question: "What is GraphQL?", answer: "GraphQL is a query language for APIs."}, {
            id: "2",
            question: "How does GraphQL differ from REST?",
            answer: "GraphQL allows clients to request only the data they need."
        }, {
            id: "3",
            question: "Is GraphQL better than REST?",
            answer: "It depends on use cases; GraphQL is more flexible, while REST is simpler."
        }], blogs: (_, {limit, sort}) => {
            let sortedBlogs = [...blogs];

            if (sort === "asc") {
                sortedBlogs.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            } else if (sort === "desc") {
                sortedBlogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            }

            return limit ? sortedBlogs.slice(0, limit) : sortedBlogs;
        }, blog: (_, {slug}) => blogs.find((blog) => blog.slug === slug),
    }, Mutation: {
        addFAQ: async (_, {question, answer}) => {
            const newFAQ = new FAQ({question, answer});
            return await newFAQ.save();
        }, deleteFAQ: async (_, {id}) => {
            await FAQ.findByIdAndDelete(id);
            return "FAQ deleted successfully";
        },
    },
};

module.exports = resolvers;
