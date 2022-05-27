
import { colors } from "../Theme/colors";
import { typography } from "../Theme/typography";


const BASE = {
    fontFamily: typography.primary,
    fontSize: 17,
    color: colors.textColorPrimary
}
const BOLD = {
    fontFamily: typography.primaryBold,
    color: colors.textColorBold
}
export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 34,

    },
    h2: {
        ...BOLD,
        fontSize: 30
    },
    h3: {
        ...BOLD,
        fontSize: 22
    },
    h4: {
        ...BOLD,
        fontSize: 17
    },
    small: {
        ...BASE,
        fontSize: 12
    }

}