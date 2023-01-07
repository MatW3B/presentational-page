import type { DateTime } from "luxon"

export interface enterprise {
    place: string,
    date_start: string, // MM-DD-RRRR
    date_end: string // MM-DD-RRRR
}

export interface parsedHistoryData {
    label: string,
    dateStart: DateTime,
    dateEnd: DateTime,
    borderColor: string,
    backgroundColor: string
}