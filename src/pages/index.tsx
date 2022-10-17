import { useRouter } from 'next/router';
import {
  MetaAccordion,
  MetaButton,
  MetaButtonIcon,
  MetaDragDrop,
  MetaDropDown,
  MetaIcon,
  MetaInput,
  MetaObscurator,
  MetaPaginatedTable,
  MetaSelect,
  MetaSkeleton,
  MetaTable,
  MetaTooltip,
} from '../../core/metads/components';
import { Switch } from '../../core/metads/components/switch/switch';
import { MetaHeading } from '../../core/metads/typography';

export default function Home() {
  const router = useRouter();

  return (
    <div className="p-5">
      <MetaHeading data-tip="oi">Pagina inicial</MetaHeading>
      <MetaDropDown>
        <div className="dropdown-item">oi</div>
      </MetaDropDown>
      <div>
        <div className="m-link" onClick={() => router.push('/formulario')}>
          Ir para formulário
        </div>
      </div>
      <div>
        <div className="m-link" onClick={() => router.push('/exemplos')}>
          Ir para rota de exemplos
        </div>
      </div>
      <div className="m-link" onClick={() => router.push('/private')}>
        Ir para rota privada (vai voltar para o mesmo lugar)
      </div>
    </div>
  );
}
