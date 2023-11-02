# ui-avatar-emoji

API for generating avatars with Apple Color Emoji.

- [vercel/og](https://www.npmjs.com/package/@vercel/og) for server generated images
- [Open Color](https://yeun.github.io/open-color/) for colors
- [apple-emoji-linux](https://github.com/samuelngs/apple-emoji-linux) for emoji png
- [ui-avatars](https://ui-avatars.com) for inspiration

# Endpoint

```plaintext
https://ui-avatar-emoji.vercel.app/api/avatar
```

# API

### Emoji

```plaintext
https://ui-avatar-emoji.vercel.app/api/avatar?emoji=😀
```

### Background

Default: `d0ebff`

HEX color code without '#'

```plaintext
https://ui-avatar-emoji.vercel.app/api/avatar?background=c3fae8
```

Random color

```plaintext
https://ui-avatar-emoji.vercel.app/api/avatar?background=random
```

### Rounded

Default: `0`

```plaintext
https://ui-avatar-emoji.vercel.app/api/avatar?rounded=15
```

For circle

```plaintext
https://ui-avatar-emoji.vercel.app/api/avatar?rounded=true
```

### Size

Default: `64`

```plaintext
https://ui-avatar-emoji.vercel.app/api/avatar?size=128
```

Size is restricted to min `32` and max `256`.

- Smaller than `min` will return `32`.
- Larger than `max` will return `256`.

###
