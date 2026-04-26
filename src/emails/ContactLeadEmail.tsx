import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import type { ContactLeadEmailProps } from "@/types/contact";

const colors = {
  bg: "#f4efe7",
  panel: "#fffdf9",
  border: "#e2d8c7",
  ink: "#171411",
  muted: "#655d52",
  accent: "#c9a15d",
  accentDark: "#7d5a24",
  surface: "#f8f2e7",
};

const labelStyle = {
  margin: "0 0 8px",
  color: colors.accentDark,
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
};

const valueStyle = {
  margin: "0",
  color: colors.ink,
  fontSize: "15px",
  lineHeight: "24px",
};

export function ContactLeadEmail({
  name,
  email,
  topic,
  brief,
  locale,
  submittedAt,
  siteUrl,
}: ContactLeadEmailProps) {
  const previewText = `New enquiry from ${name} - ${topic}`;

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={hero}>
            <Text style={eyebrow}>New enquiry</Text>
            <Heading as="h1" style={heading}>
              {name} sent an enquiry
            </Heading>
            <Text style={lead}>
              A new lead was submitted through the AlmazovLight contact form. The client details and
              topic are below.
            </Text>
            <Button href={`mailto:${email}`} style={primaryButton}>
              Reply by email
            </Button>
          </Section>

          <Section style={content}>
            <Row>
              <Column style={cardColumn}>
                <Section style={card}>
                  <Text style={labelStyle}>Client</Text>
                  <Text style={valueStyle}>{name}</Text>
                </Section>
              </Column>
              <Column style={cardSpacer} />
              <Column style={cardColumn}>
                <Section style={card}>
                  <Text style={labelStyle}>Email</Text>
                  <Text style={valueStyle}>
                    <Link href={`mailto:${email}`} style={link}>
                      {email}
                    </Link>
                  </Text>
                </Section>
              </Column>
            </Row>

            <Row>
              <Column style={cardColumn}>
                <Section style={card}>
                  <Text style={labelStyle}>Topic</Text>
                  <Text style={valueStyle}>{topic}</Text>
                </Section>
              </Column>
              <Column style={cardSpacer} />
              <Column style={cardColumn}>
                <Section style={card}>
                  <Text style={labelStyle}>Locale</Text>
                  <Text style={valueStyle}>{locale.toUpperCase()}</Text>
                </Section>
              </Column>
            </Row>

            <Section style={briefSection}>
              <Text style={labelStyle}>Message</Text>
              <Text style={briefText}>{brief?.trim() ? brief : "No message was provided."}</Text>
            </Section>

            <Hr style={divider} />

            <Section>
              <Text style={metaLine}>Submitted at: {submittedAt}</Text>
              {siteUrl ? (
                <Text style={metaLine}>
                  Source:{" "}
                  <Link href={siteUrl} style={link}>
                    {siteUrl}
                  </Link>
                </Text>
              ) : null}
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  margin: "0",
  padding: "32px 12px",
  backgroundColor: colors.bg,
  color: colors.ink,
  fontFamily:
    "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const container = {
  maxWidth: "640px",
  margin: "0 auto",
};

const hero = {
  padding: "32px 32px 28px",
  backgroundColor: "#231d18",
  borderRadius: "28px 28px 0 0",
};

const eyebrow = {
  margin: "0 0 16px",
  color: colors.accent,
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
};

const heading = {
  margin: "0",
  color: "#fff9f2",
  fontSize: "38px",
  lineHeight: "44px",
  fontWeight: "700",
};

const lead = {
  margin: "16px 0 24px",
  color: "#e7ddd1",
  fontSize: "16px",
  lineHeight: "27px",
};

const primaryButton = {
  borderRadius: "999px",
  backgroundColor: colors.accent,
  color: "#1d1712",
  padding: "14px 22px",
  fontSize: "13px",
  fontWeight: "700",
  textDecoration: "none",
};

const content = {
  padding: "24px",
  backgroundColor: colors.panel,
  border: `1px solid ${colors.border}`,
  borderTop: "0",
  borderRadius: "0 0 28px 28px",
};

const cardColumn = {
  width: "48%",
};

const cardSpacer = {
  width: "4%",
};

const card = {
  padding: "18px 18px 16px",
  marginBottom: "14px",
  border: `1px solid ${colors.border}`,
  borderRadius: "20px",
  backgroundColor: colors.surface,
};

const briefSection = {
  padding: "22px 22px 4px",
  marginTop: "6px",
  borderRadius: "24px",
  backgroundColor: "#f3eadc",
};

const briefText = {
  margin: "0 0 18px",
  color: colors.ink,
  fontSize: "16px",
  lineHeight: "29px",
  whiteSpace: "pre-wrap" as const,
};

const divider = {
  margin: "10px 0 20px",
  borderColor: colors.border,
};

const metaLine = {
  margin: "0 0 8px",
  color: colors.muted,
  fontSize: "13px",
  lineHeight: "20px",
};

const link = {
  color: colors.accentDark,
  textDecoration: "underline",
};
