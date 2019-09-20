export default function() {
  // @ts-ignore
  const { raw } = this;
  const files = (raw as any).files;
  if (files && files.bin) {
    const bin = Array.isArray(files.bin) ? files.bin[0] : files.bin;

    if (bin) {
      if (raw.body) {
        const peaks = raw.body.peaks;
        return { bin, peaks };
      } else {
        return { bin };
      }
    }
  }

  return null;
}
