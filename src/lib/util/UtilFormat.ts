export default class UtilFormat {
  public static slugify(text: string): string {
    return text
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  }
  static dateAsTimeAgo(date: Date | null): string {
    const pastTime = date ? date.getTime() : NaN;
    if (isNaN(pastTime)) {
      return "Invalid date";
    }
    const timeDifferenceInSeconds = (Date.now() - pastTime) / 1000;
    if (timeDifferenceInSeconds < 1) {
      return "just now";
    }
    const conditions: { secs: number; str: string }[] = [
      { secs: 12 * 30 * 24 * 60 * 60, str: "year" },
      { secs: 30 * 24 * 60 * 60, str: "month" },
      { secs: 24 * 60 * 60, str: "day" },
      { secs: 60 * 60, str: "hour" },
      { secs: 60, str: "minute" },
      { secs: 1, str: "second" }
    ];
    for (const unit of conditions) {
      const d = timeDifferenceInSeconds / unit.secs;

      if (d >= 1) {
        const t = Math.round(d);
        return `${t} ${unit.str}${t > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  }
}
