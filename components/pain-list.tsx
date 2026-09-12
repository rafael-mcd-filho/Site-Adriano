import {
  Activity,
  BatteryLow,
  Bed,
  CalendarClock,
  CircleAlert,
  Clock,
  Coffee,
  Ear,
  Layers,
  MessageCircle,
  ScanFace,
  Smile,
  Soup,
  Speech,
  Users,
  Utensils,
  Volume2,
  type LucideIcon,
} from "lucide-react";

/**
 * Ícones permitidos na lista de sintomas.
 *
 * É um mapa fechado, e não um componente vindo do conteúdo, porque
 * `lib/content.ts` descreve o que a página diz — não o que ela importa. Assim
 * o texto continua sendo dado e o ícone continua sendo interface.
 */
const painIconSet = {
  atividade: Activity,
  bateria: BatteryLow,
  cama: Bed,
  cafe: Coffee,
  calendario: CalendarClock,
  camadas: Layers,
  conversa: MessageCircle,
  duvida: CircleAlert,
  fala: Speech,
  ouvido: Ear,
  refeicao: Utensils,
  rosto: ScanFace,
  sopa: Soup,
  sorriso: Smile,
  som: Volume2,
  tempo: Clock,
  terceiros: Users,
} satisfies Record<string, LucideIcon>;

export type PainIcon = keyof typeof painIconSet;

/**
 * Um traço igual em todos os itens não ajudava ninguém a achar o seu sintoma:
 * a lista virava um bloco de texto de quatro parágrafos. O ícone dá à pessoa um
 * ponto de entrada — ela procura o desenho que parece com o problema dela.
 *
 * Sem `icons`, cai no traço antigo. É o que a página "Para dentistas" usa:
 * lá os itens descrevem situações de encaminhamento, não sintomas, e um ícone
 * por item sugeriria uma taxonomia que não existe.
 */
export function PainList({
  items,
  icons,
}: {
  items: string[];
  icons?: readonly PainIcon[];
}) {
  return (
    <ul className="pain-list">
      {items.map((item, index) => {
        const Icon = icons ? painIconSet[icons[index]] : undefined;

        return (
          <li className="pain-item reveal" key={item}>
            {Icon ? (
              <span className="pain-icon" aria-hidden="true">
                <Icon size={19} />
              </span>
            ) : (
              <span className="pain-mark" aria-hidden="true" />
            )}
            {item}
          </li>
        );
      })}
    </ul>
  );
}
