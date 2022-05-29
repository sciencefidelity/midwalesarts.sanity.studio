import { FC } from "react"
import { useRouter } from "next/router"
import format from "date-fns/format"
import { cy, enGB } from "date-fns/locale"

interface Props {
  date?: string | Date
  dateEnd?: string
  dateStart?: string
}

// 4th November to 19th December 2021
//4ydd Tachwedd i 19eg Rhagfyr 2021
export const ExhibitionDate: FC<Props> = ({ dateEnd, dateStart }) => {
  const { locale } = useRouter()
  return (
    <time dateTime={format(new Date(dateStart), "yyyy-MM-dd")}>
      {locale === "cy"
        ? format(new Date(dateStart),
          "do MMMM",
          {locale: cy}
        )
        : format(new Date(dateStart),
          "do MMMM",
          {locale: enGB}
        )
      }
      {" "}{locale === "cy" ? "i" : "to"}{" "}
      {locale === "cy"
        ? format(new Date(dateEnd),
          "do MMMM yyyy",
          {locale: cy}
        )
        : format(new Date(dateEnd),
          "do MMMM yyyy",
          {locale: enGB}
        )
      }
    </time>
  )
}

// Saturday, February 12th 2022
// dydd Sadwrn, Chwefror 12, 2022
export const PostDate: FC<Props> = ({ date }) => {
  const { locale } = useRouter()
  return (
    <time dateTime={format(new Date(date), "yyyy-MM-dd")}>
      {locale === "cy"
        ? format(new Date(date),
          "eeee, MMMM do yyyy",
          {locale: cy}
        )
        : format(new Date(date),
          "eeee, MMMM do yyyy",
          {locale: enGB}
        )
      }
    </time>
  )
}

// Sat, 5th February
// Sad, 5ed Chwefror
export const SidebarEventDate: FC<Props> = ({ date }) => {
  const { locale } = useRouter()
  return (
    <time dateTime={format(new Date(date), "yyyy-MM-dd")}>
      {locale === "cy"
        ? format(new Date(date),
          "eee, do MMMM",
          {locale: cy}
        )
        : format(new Date(date),
          "eee, do MMMM",
          {locale: enGB}
        )
      }
    </time>
  )
}

// 4th November to 19th December 2021
//4ydd Tachwedd i 19eg Rhagfyr 2021
export const SidebarExhibitionDate: FC<Props> = ({ dateEnd, dateStart }) => {
  const { locale } = useRouter()
  return (
    <time dateTime={format(new Date(dateStart), "yyyy-MM-dd")}>
      {locale === "cy"
        ? format(new Date(dateStart),
          "do MMMM",
          {locale: cy}
        )
        : format(new Date(dateStart),
          "do MMMM",
          {locale: enGB}
        )
      }
      {" "}{locale === "cy" ? "i" : "to"}{" "}
      {locale === "cy"
        ? format(new Date(dateEnd),
          "do MMMM",
          {locale: cy}
        )
        : format(new Date(dateEnd),
          "do MMMM",
          {locale: enGB}
        )
      }
    </time>
  )
}
