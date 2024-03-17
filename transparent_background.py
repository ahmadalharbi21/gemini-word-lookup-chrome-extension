from PIL import Image, ImageSequence

def remove_black_background(input_gif, output_gif):
    # Open the GIF
    gif = Image.open(input_gif)

    # Create a new GIF with transparent background
    transparent_gif = []

    # Iterate over each frame in the GIF
    for frame in ImageSequence.Iterator(gif):
        # Convert the frame to RGBA mode
        rgba_frame = frame.convert("RGBA")

        # Create a new transparent image with the same size as the frame
        transparent_frame = Image.new("RGBA", rgba_frame.size, (0, 0, 0, 0))

        # Iterate over each pixel in the frame
        for x in range(rgba_frame.width):
            for y in range(rgba_frame.height):
                pixel = rgba_frame.getpixel((x, y))

                if pixel != (0, 0, 0, 255):
                    transparent_frame.putpixel((x, y), pixel)

        # Append the transparent frame to the list
        transparent_gif.append(transparent_frame)

    # Save the transparent GIF
    transparent_gif[0].save(output_gif, save_all=True, append_images=transparent_gif[1:], duration=gif.info['duration'], loop=0, disposal=2)

input_gif = "\images\gif-with-background-01 (1).gif"
output_gif = "output.gif"
remove_black_background(input_gif, output_gif)