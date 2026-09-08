export function FloatingWhatsApp() {
    const phone = '51921011040'
    const message = 'Hola, vi la página de MB Consulting'

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    return (
        <a
            className="whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <img
                src="/images/icons/whatsapp.png"
                alt="WhatsApp"
                className="whatsapp-image"
            />
        </a>
    )
}