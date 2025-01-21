import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

interface WelcomeEmailProps {
    name?: string;
    dashboardUrl?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://qtcc.co.nz";

export const WelcomeEmail = ({
    name = "",
    dashboardUrl = `${baseUrl}/dashboard`,
}: WelcomeEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Welcome to Queenstown Coders Connect! 🏔️</Preview>
            <Tailwind>
                <Body className="bg-white font-sans">
                    <Container className="mx-auto w-full max-w-[600px] p-0">
                        <Section className="p-8 text-center">
                            <Text className="mx-0 mb-8 mt-4 p-0 text-center text-2xl font-normal text-gray-900">
                                <span className="font-bold tracking-tighter">QTCC</span>
                            </Text>
                            <Text className="text-sm font-normal uppercase tracking-wider text-gray-600">
                                Welcome to the community
                            </Text>
                            <Heading className="my-4 text-4xl font-medium leading-tight text-gray-900">
                                Kia Ora{name ? `, ${name}` : ''}!
                            </Heading>
                            <Text className="mb-8 text-lg leading-8 text-gray-600">
                                Welcome to Queenstown Coders Connect - where tech minds meet mountains.
                            </Text>
                        </Section>

                        <Section className="my-6 rounded-2xl bg-indigo-200 bg-[radial-gradient(circle_at_bottom_right,#818cf8_10%,transparent_60%)] p-8 text-center">
                            <Heading className="m-0 text-3xl font-medium text-indigo-600">
                                What&apos;s Next?
                            </Heading>
                            <Text className="my-4 text-xl font-medium text-gray-900">
                                Join our monthly meetups, collaborate on projects, and connect with local tech enthusiasts.
                            </Text>
                        </Section>

                        <Section className="pb-6 text-center">
                            <Text className="text-xl leading-8 text-gray-900">
                                We&apos;re excited to have you join our community! <br />
                                See you at the next meetup 🏔️
                            </Text>
                            <Link
                                href={dashboardUrl}
                                className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-12 py-4 text-center text-sm font-bold text-white no-underline"
                            >
                                Visit Dashboard
                            </Link>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default WelcomeEmail;
