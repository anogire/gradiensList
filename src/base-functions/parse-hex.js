export function parseHEX(color) {
    const hex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

    if (!hex.test(color)) {
        return null;
    }

    color = color.slice(1);

    let red, green, blue;

    if (color.length === 3) {
        red = color[0] + color[0];
        green = color[1] + color[1];
        blue = color[2] + color[2];
    } else if (color.length === 6) {
        red = color.slice(0, 2);
        green = color.slice(2, 4);
        blue = color.slice(4, 6);
    }

    return [
        parseInt(red, 16),
        parseInt(green, 16),
        parseInt(blue, 16),
    ]
}