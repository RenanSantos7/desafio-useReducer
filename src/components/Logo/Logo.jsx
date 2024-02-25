export default function Logo() {
    const logoNegrito = {
        fontWeight: 700,
        fontFamily: 'BioRhyme',
        fontSize: '1.2em',
    }

    const logoFinal = {
        fontWeight: 400,
        fontStyle: 'italic',
        fontFamily: 'var(--fonte-logo)'
    }

    return (
        <>
            <span style={logoNegrito}>
                R
            </span>
            <span style={logoFinal}>
                bank
            </span>
        </>
    )
}
