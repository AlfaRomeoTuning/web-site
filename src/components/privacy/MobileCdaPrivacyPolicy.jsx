import { Helmet } from 'react-helmet';
import { BASE_URL, CONTACT_EMAIL } from '../../config';
import './PrivacyPolicy.css';

const APP_NAME = 'MobileCDA';
const DEVELOPER = 'Alfa Tuning';
const EFFECTIVE_DATE = 'November 24, 2026';
const PAGE_PATH = '/mobilecda/privacy-policy';

const TITLE = `${APP_NAME} Privacy Policy | ${DEVELOPER}`;
const DESCRIPTION = `How the ${APP_NAME} Android app collects, uses and protects account information, vehicle module identification data and local device connectivity.`;

function MobileCdaPrivacyPolicy() {
    const pageUrl = `${BASE_URL}${PAGE_PATH}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${APP_NAME} privacy request`)}`;

    return (
        <div id="privacy-page">
            <Helmet>
                <title>{TITLE}</title>
                <meta name="description" content={DESCRIPTION} />
                <meta property="og:title" content={TITLE} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:site_name" content={DEVELOPER} />
                <link rel="canonical" href={pageUrl} />
            </Helmet>

            <article className="privacy-container">
                <header className="privacy-header">
                    <h1>{APP_NAME} Privacy Policy</h1>
                    <p className="privacy-meta">Effective date: {EFFECTIVE_DATE}</p>
                </header>

                <section>
                    <p>
                        This Privacy Policy explains how {DEVELOPER} (“we”, “us”) handles information in
                        the {APP_NAME} mobile application (the “App”). It describes what data the App
                        accesses, collects, uses and shares, and the choices you have. By using the App
                        you agree to the practices described here.
                    </p>
                </section>

                <section>
                    <h2>Summary</h2>
                    <ul>
                        <li>We collect <strong>account information</strong> to register you, sign you in and link your account.</li>
                        <li>We send <strong>vehicle module identification data</strong> (module, software and calibration versions) to our server to find matching firmware and calibrations.</li>
                        <li>The App uses <strong>Bluetooth, Wi-Fi and the local network</strong> only to talk to your diagnostic interface (ELM327 or MicroPod).</li>
                        <li>Diagnostic data read from your vehicle stays <strong>on your device</strong> unless a specific feature you use needs to send it to our server.</li>
                        <li>We do <strong>not</strong> use analytics, advertising SDKs or automatic telemetry, and we do <strong>not</strong> sell your data.</li>
                    </ul>
                </section>

                <section>
                    <h2>1. Information we collect</h2>

                    <h3>1.1 Account information</h3>
                    <p>
                        When you register, sign in or link your account, we process the information needed
                        to create and authenticate your account, such as your email address, name or display
                        name, and an account identifier.
                    </p>
                    <p>
                        If you choose <strong>Sign in with Google</strong>, Google shares with us the basic
                        profile information you authorize (typically your name, email address and Google account
                        identifier). We do not receive your Google password. Google’s handling of your data is
                        governed by the{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            Google Privacy Policy
                        </a>.
                    </p>

                    <h3>1.2 Vehicle module identification data</h3>
                    <p>
                        To find firmware and calibrations that match your vehicle, the App sends our server
                        identification data read from the vehicle’s control units, such as module type,
                        hardware and software version numbers, part numbers and calibration identifiers. We use
                        this data to search for and select compatible firmware and calibration files and to
                        deliver them to you.
                    </p>

                    <h3>1.3 Local device connectivity</h3>
                    <p>
                        The App uses Bluetooth, Wi-Fi and your local network to discover and communicate with
                        supported diagnostic interfaces (ELM327 and MicroPod). Android may ask you to grant
                        permissions such as “Nearby devices” or, on some Android versions, location access, because
                        the system requires them for Bluetooth scanning. The App uses these permissions only to connect
                        to your diagnostic interface. We do not collect, store or transmit your location, and we do
                        not collect information about other nearby devices or networks.
                    </p>

                    <h3>1.4 Vehicle diagnostic data</h3>
                    <p>
                        Diagnostic data the App reads from your vehicle while you work (for example fault codes,
                        live values and module parameters) is processed and stored locally on your device. It is not
                        sent to our server, except where a specific feature you choose to use requires it (such as the
                        module identification lookup described in section 1.2). In that case only the data needed for
                        that feature is sent.
                    </p>

                    <h3>1.5 What we do not collect</h3>
                    <p>
                        The App does not include analytics, advertising or tracking SDKs and does not automatically
                        collect usage statistics, crash telemetry, advertising identifiers, contacts, photos, or
                        location.
                    </p>
                </section>

                <section>
                    <h2>2. How we use information</h2>
                    <ul>
                        <li>To create, authenticate and manage your account.</li>
                        <li>To search for and deliver firmware and calibrations compatible with your vehicle’s modules.</li>
                        <li>To connect the App to your diagnostic interface.</li>
                        <li>To respond to your support requests and communicate with you about the App.</li>
                        <li>To keep the service secure, prevent abuse and comply with legal obligations.</li>
                    </ul>
                    <p>We do not use your data for advertising or profiling.</p>
                </section>

                <section>
                    <h2>3. How we share information</h2>
                    <p>We do not sell, rent or trade your personal data. We share data only:</p>
                    <ul>
                        <li>with Google, when you choose Sign in with Google, to authenticate you;</li>
                        <li>with service providers that host and operate our server on our behalf, under obligations to protect the data and use it only to provide the service;</li>
                        <li>when required by law, or to protect the rights, safety and security of our users or ourselves.</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Data security</h2>
                    <p>
                        Data sent between the App and our server is transmitted over encrypted connections (HTTPS/TLS).
                        We limit access to personal data to what is needed to operate the service and use reasonable
                        technical and organizational measures to protect it. No method of transmission or storage is
                        completely secure, but we work to protect your information.
                    </p>
                </section>

                <section>
                    <h2>5. Data retention and deletion</h2>
                    <p>
                        We keep account information for as long as your account is active. Vehicle module identification
                        data linked to your account is kept as long as needed to provide firmware and calibration services
                        to you. Data stored locally on your device remains under your control and is removed when you clear
                        the App’s data or uninstall the App.
                    </p>
                    <p>
                        You can ask us to delete your account and associated data at any time by emailing{' '}
                        <a href={mailto}>{CONTACT_EMAIL}</a> from the address linked to your account. We will delete your
                        data within 30 days, except where we must keep certain information to meet legal obligations.
                    </p>
                </section>

                <section>
                    <h2>6. Your rights and choices</h2>
                    <p>
                        Depending on where you live, you may have the right to access, correct, delete or export your
                        personal data, to object to or restrict its processing, and to withdraw consent. You can also revoke
                        Bluetooth, nearby devices and location permissions in your device settings at any time, though the
                        App will then be unable to connect to your diagnostic interface. To exercise your rights, contact us
                        using the details below.
                    </p>
                </section>

                <section>
                    <h2>7. Children’s privacy</h2>
                    <p>
                        The App is intended for vehicle owners and automotive professionals and is not directed at children
                        under 13 (or the minimum age required in your country). We do not knowingly collect personal data
                        from children. If you believe a child has provided us with data, contact us and we will delete it.
                    </p>
                </section>

                <section>
                    <h2>8. Changes to this policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will post the updated version on this page
                        and change the effective date above. Significant changes will also be communicated in the App where
                        appropriate.
                    </p>
                </section>

                <section>
                    <h2>9. Contact us</h2>
                    <p>
                        If you have questions about this Privacy Policy or want to exercise your rights, contact {DEVELOPER} at{' '}
                        <a href={mailto}>{CONTACT_EMAIL}</a>.
                    </p>
                </section>
            </article>
        </div>
    );
}

export default MobileCdaPrivacyPolicy;
