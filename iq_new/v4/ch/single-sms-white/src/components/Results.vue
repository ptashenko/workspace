<template>
  <div
    class="results content"
    :class="{ android: device == 'Android', ios: device == 'iOS' }"
  >
    <div class="wrapper">
      <!-- Math.floor(Math.random() * (150 - 51)) + 51 -->
      <span class="img">
        <img :src="require('../assets/static/brain.svg')" alt="" />
      </span>
      <span class="results__info results__yellow">Herzlichen Glückwünsch!</span>
      <span class="results__info">
        Das Ergebnis Ihres Tests zeigt an, dass Sie eine außergewöhnliche
        Denkweise und ein hohes Maß an Intelligenz vorzuweisen haben.
      </span>
      <span class="results__info">
        Herzlichen Glückwunsch, ihr IQ beträgt:
        {{ Math.floor(Math.random() * (140 - 50)) + 50 }}
      </span>
      <span class="results__info">
        Dieses Ergebnis erzielen weniger als 3% der Menschen auf der gesamten
        Welt. Zumeist sind die Leben dieser Menschen mit Erfolg geprägt - sie
        sind berühmte Politiker, Geschäftsinhaber, Top-Manager von Unternehmen
        und renommierte Wissenschaftler.
      </span>
      <span class="results__info">
        Wenn Sie solche Erfolge in Ihrem Leben noch nicht erreicht haben, müssen
        Sie sich die Empfehlungen in dieser Aufnahme anhören, um bewusster und
        schneller auf den Erfolg hinzusteuern.
      </span>
      <span class="results__info">
        Wie wir alle wissen, ist Intelligenz eine allgemeine menschliche
        Fähigkeit, die uns hilft Schwierigkeiten zu überwinden. Sie setzt sich
        zusammen aus Komponenten wie Denkweise, Vorstellungskraft,
        Visualisierung, Gedächtnis, Wahrnehmung und Empfindung.
      </span>
      <span class="results__info">
        Die stärkste Eigenschaft Ihrer speziellen Art von Intelligenz besteht
        darin, dass Sie in der Lage sind, Ihr logisch-mathematisches,
        sprachliches, kreatives Denken sowie Ihre zwischenmenschliche und
        innerpersönliche Intelligenz gleichermaßen weiterzuentwickeln.
      </span>
      <span class="results__info">
        Jeder der oben genannten Intelligenztypen hat seine eigenen spezifischen
        Merkmale und benötigt im Entwicklungsprozess einen speziellen Ansatz.
        Jeder Ansatz umfasst eigene Systeme zum Empfangen, Verarbeiten und
        Speichern von Informationen. Sogar die Art der Informationen, mit denen
        Ihr Verstand im Rahmen dieser oder jener Intelligenz arbeitet, ist
        völlig anders. In Bezug auf Computerprogrammierung hat jede Intelligenz
        ihre eigene Datenbank und ihr eigenes Betriebssystem. Aber es hindert
        sie nicht daran, in Harmonie innerhalb desselben Bewusstseins zu
        koexistieren. In nur sehr seltenen Fällen ist jede Art von Intelligenz
        gleicher Maßen hoch entwickelt. Sie sind einer dieser seltenen Menschen,
        die dafür prädisponiert sind.
      </span>
      <span class="results__info">
        Stellen Sie sich vor, was Sie mit solchen Fähigkeiten erreichen können!
        Möglicherweise sind Sie sich noch nicht aller Ihrer Fähigkeiten bewusst,
        aber diese Aufnahme hilft Ihnen dabei, Ihr Potenzial voll auszuschöpfen.
      </span>
      <span class="results__info"> Was bedeutet das für Sie? </span>
      <span class="results__info">
        Zuallererst werden Sie neue berufliche und finanzielle Möglichkeiten
        ergründen: Ohne enorme Anstrengungen können Sie finanziell unabhängig
        werden und Erfolg in Ihrer Karriere oder bei der Gründung Ihres eigenen
        Unternehmens erzielen. Eine wirklich gut entwickelte emotionale
        Intelligenz, Erfolg in Ihrem persönlichen Leben und die allgemeine
        Kommunikation mit Menschen bringen Sie dem Erreichen Ihrer Ziele immer
        näher.
      </span>
      <span class="results__info"
        >Es ist nicht schwer zu verstehen, dass die Intelligenz die Funktionen
        einiger Gehirnregionen gleichzeitig nutzt. Um Intelligenz zu entwickeln,
        müssen Sie einen komplexen Ansatz verwenden, der aus verschiedenen
        Methoden besteht. Diese Methoden, über die wir später sprechen werden,
        können als spezielle Werkzeuge zur Entwicklung Ihrer Intelligenz
        verwendet werden.</span
      >
      <span class="results__info">Lassen Sie uns loslegen!</span>
      <span class="results__info"
        >Hören Sie genau zu und denken Sie daran, dass alles, was Sie hören, für
        Sie sehr wichtig sein kann.</span
      >
      <span class="results__info results__title"
        >1- Um intelligenter zu werden, halten Sie Ihr Gehirn „aktiv“</span
      >
      <span class="results__info"
        >Haben Sie sich jemals gefragt, wie Sie intelligenter werden können?
        Wenn sie sich das gefragt haben, bedeutet das, dass Sie bereits den
        ersten Schritt gemacht haben. Behalten Sie dieses Streben nach Wissen
        bei. Bleiben Sie neugierig wie ein Kind. Wenn Sie nicht wissen, wie das
        Flugzeug gebaut ist und wie es starten kann, lesen Sie darüber. Wenn Sie
        von Zaubertricks fasziniert sind, versuchen Sie diese zu erlernen, oder
        versuchen Sie, einige davon selbst zu entlarven. Lassen Sie sich auch
        keinen guten Dokumentarfilm entgehen.</span
      >
      <span class="results__info"
        >Füttern Sie Ihr Gehirn mit interessanten Informationen und Wissen, um
        nicht zum Besserwisser zu werden, sondern um in Harmonie mit sich selbst
        zu sein.</span
      >
      <span class="results__info"
        >Denken Sie daran, dass Ihr Gehirn Neuronenverbindungen fördert und
        verwendet, um im Vollmodus arbeiten zu können, damit neue Informationen
        Ihre Denkprozesse zum Speichern und Wiederherstellen von Informationen
        aktiver machen.</span
      >
      <span class="results__info"
        >Gehen Sie niemals ins Bett, wenn Sie an diesem Tag nichts Neues gelernt
        haben.</span
      >
      <span class="results__info results__title"
        >2- Um intelligenter zu werden, lesen Sie viel, viel mehr!</span
      >
      <span class="results__info"
        >Es ist wissenschaftlich erwiesen, dass das Lesen nicht nur Ihren
        Wortschatz bereichert und Ihre sprachliche Intelligenz entwickelt,
        sondern auch Ihr Bewusstsein in Schwung bringt. Wenn Sie sich mit dem
        Lesen von Geschichten beschäftigen, beginnen Sie zu empfinden, was die
        Charaktere fühlen und können mit ihnen sympathisieren. Dies bedeutet,
        dass das Lesen nicht nur Ihre sprachliche Intelligenz verbessert,
        sondern auch die innerpersönliche und emotionale Intelligenz. Wenn Sie
        klüger sein wollen, lesen Sie viele Bücher. Lesen ist eine der am
        meisten empfohlenen Arten von Aktivitäten für die Gehirngymnastik.</span
      >
      <span class="results__info results__title"
        >3- Arbeiten Sie daran, Ihre Methoden der Beharrlichkeit zu
        perfektionieren und Sie werden davon profitieren</span
      >
      <span class="results__info"
        >Wie kann man intelligenter werden? Wie Sie wissen, ist emotionale
        Intelligenz mindestens genauso wichtig für den Erfolg in Ihrem Leben wie
        Ihre rationale Intelligenz. Wenn Sie an der Entwicklung Ihrer
        emotionalen Intelligenz arbeiten, können Sie Ihr intellektuelles
        Potenzial erheblich verbessern. So können Sie sich an die Umgebung
        anpassen und aufkommende Probleme auf effektivste Weise lösen.</span
      >
      <span class="results__info results__title"
        >4- Entscheiden Sie sich für eine schwierige Art der Aufgabenlösung, um
        Ihre Intelligenz zu fördern</span
      >
      <span class="results__info"
        >Wie kann man intelligenter werden? Dies mag Ihnen lächerlich
        erscheinen, aber das Zähneputzen mit der linken Hand (oder mit der
        rechten Hand, wenn Sie Linkshänder sind) ist eine gute Möglichkeit, Ihr
        Gehirn zu trainieren. Wenn wir unsere Gewohnheiten auf eine neue Art und
        Weise anwenden, lassen wir unser Gehirn nach neuen Wegen suchen, um das
        gleiche Ergebnis zu erzielen. Dies verhindert, dass Neuronen oxidieren,
        und hilft neue Neuronenverbindungen zu aktivieren und zu
        verstärken.</span
      >
      <span class="results__info results__title"
        >5- Verlassen Sie sich nicht nur auf künstliche Intelligenz</span
      >
      <span class="results__info"
        >Heutzutage sind wir alle im Bahn der künstlichen Intelligenz. Durch
        Drücken einer einzigen Taste erhalten wir 83645776 Definitionen und
        Möglichkeiten, die Aufgaben auszuführen und Ergebnisse zu
        erzielen.</span
      >
      <span class="results__info"
        >Wie kann man intelligenter werden? Sie sollten vermeiden, alle Ihre
        intellektuellen Aktivitäten an Online-Übersetzer, GPS-Systeme,
        Taschenrechner und Suchmaschinen zu delegieren. Bemühen Sie sich, nicht
        eine intellektuell faule Person zu werden, auch wenn die Gesellschaft
        Sie manchmal dazu verleitet.</span
      >
      <span class="results__info"
        >Wann haben Sie das letzte Mal arithmetische Berechnungen durchgeführt?
        Zum Beispiel, um die Rechnung im Restaurant zwischen Ihren Freunden
        aufzuteilen, ohne dabei einen Taschenrechner zu verwenden.</span
      >
      <span class="results__info results__title"
        >6- Suchen Sie nach Neuheit</span
      >
      <span class="results__info"
        >Es ist kein Zufall, dass geniale Leute wie Einstein Spezialisten auf
        vielen Wissensgebieten waren und Genies genannt wurden.</span
      >
      <span class="results__info"
        >Genies suchen immer nach neuen Aufgaben und erforschen neue
        Wissensgebiete. Dies unterscheidet sie von anderen Menschen.</span
      >
      <span class="results__info"
        >Wenn Sie offen für neue Erfahrungen sind, suchen Sie immer nach neuen
        Informationen, neuen Aktivitäten, neuen Dingen zum Lernen und im
        Allgemeinen neuen Dingen zum Erleben.</span
      >
      <span class="results__info"
        >Wenn Sie auf der Suche nach neuen Erfahrungen sind, stoßen Sie
        automatisch auf neue Infos. Zunächst stellen Sie mit jeder neuen
        Aktivität, an der Sie teilnehmen, neue synaptische Verbindungen her.
        Diese Verbindungen basieren aufeinander - durch Erhöhen der Aktivität
        des Nervensystems werden mehr Verbindungen geknöpft, und auf ihrer
        Grundlage werden weitere, neue Verbindungen hergestellt. So funktioniert
        Lernen.</span
      >
      <span class="results__info"
        >Die Nervenelastizität ist ein wichtiger Faktor bei individuellen
        Intelligenzunterschieden. Die Elastizität bezieht sich auf die Anzahl
        der Verbindungen, die zwischen den Neuronen hergestellt werden, und
        darauf, wie sie die folgenden Verbindungen beeinflussen und wie lange
        diese Verbindungen andauern. Im Allgemeinen bedeutet dies, wie viele
        neue Informationen Sie empfangen können und ob Sie sie speichern können
        oder nicht, während Sie Ihr Gehirn ständig verändern. Indem Sie sich
        ständig neuen Erfahrungen aussetzen, können Sie Ihr Gehirn in den
        Lernmodus versetzen.</span
      >
      <span class="results__info"
        >Neue Erfahrungen stimulieren auch die Dopaminproduktion, die die
        Neurogenese - die Bildung neuer Neuronen - nicht nur stark motiviert,
        sondern auch stimuliert und Ihr Gehirn auf das Lernen vorbereitet. Alles
        was Sie tun müssen, ist Ihren Hunger zu stillen.</span
      >
      <span class="results__info"
        >Eine wunderbare Voraussetzung für das Lernen ist eine neue Aktivität,
        die die Produktion von Dopamin sicherstellt, was Sie motivierter macht,
        was wiederum Ihr Engagement verbessert und neue Neuronen schafft.
        Infolgedessen kann eine Neurogenese stattfinden + erhöhte synaptische
        Elastizität (Erhöhung der Anzahl neuer Neuronenverbindungen beim
        Lernen).</span
      >
      <span class="results__info"
        >Nach den Untersuchungen von Susanne Jaeggi haben schwedische Forscher
        herausgefunden, dass nach 14 Stunden Training Ihres
        Kurzzeitgedächtnisses innerhalb von 5 Wochen ein erhöhtes
        obligatorisches Potenzial von Dopamin D1 im präfrontalen Lappen und in
        der Gehirnregion des Parietallappens besteht. Dieser spezifische
        Dopaminrezeptor Typ D1 ist mit dem Wachstum und der Entwicklung von
        Nervenzellen verbunden. Eine erhöhte Elastizität ermöglicht eine weitere
        Verstärkung dieses Rezeptors und ist sehr nützlich zur Maximierung der
        kognitiven Funktionen.</span
      >
      <span class="results__info"
        >Verwenden Sie diesen Tipp zu Hause: Seien Sie „Einstein“. Halten Sie
        immer Ausschau nach neuen Gehirnaktivitäten. Lernen Sie ein neues
        Musikinstrument zu spielen. Nehmen Sie an einem Malkurs teil. Besuchen
        Sie ein Museum. Lesen Sie über ein neues Wissenschaftsgebiet. Stärken
        Sie Ihren Hunger nach Wissen.</span
      >
      <span class="results__info results__title"
        >7- Sprechen Sie mit sich selbst, um Ihre Intelligenz zu fördern</span
      >
      <span class="results__info"
        >Mit sich selbst zu sprechen ist normalerweise mit dem Verhalten
        verrückter Menschen verbunden, die murmeln oder vor sich hin schreien.
        Es ist jedoch sehr nützlich für die Gehirnaktivität. Wenn wir auf diese
        Weise Anweisungen für uns selbst erstellen, können wir die Aufgabe, an
        der wir gerade arbeiten, verallgemeinern und vereinfachen. Es hilft,
        unsere Ressourcen und Fähigkeiten zu optimieren, um aufkommende Probleme
        so effektiv wie möglich zu lösen.</span
      >
      <span class="results__info"
        >Wie kann man intelligenter werden? Schämen Sie sich nicht, ab und zu
        mit sich selbst zu reden. Ihr Gehirn wird es Ihnen danken.</span
      >
      <span class="results__info results__title">8-Verwenden Sie Twitter</span>
      <span class="results__info"
        >Dies mag eigenartig erscheinen, aber die jüngsten Untersuchungen haben
        gezeigt, dass der Austausch von Tweets unsere Fähigkeit zur Synthese
        unterstützt und verbessert. Durch Twitter müssen wir lernen, wie wir
        unsere Meinung kurz und aussagekräftig zusammenfassen und dies in 140
        Zeichen formulieren können.</span
      >
      <span class="results__info"
        >Wenn Sie Twitter nicht verwenden möchten, können Sie einfach ein Stück
        Papier und einen Bleistift nehmen und Ihre Gedanken innerhalb derselben
        Zeichenbeschränkung aufschreiben. Wenn Sie es oft genug tun, werden Sie
        überrascht sein, wie zügig Sie sich in wenigen Worten ausdrücken
        können.</span
      >
      <span class="results__info results__title"
        >9- Lernen Sie Fremdsprachen, um Ihre Intelligenz zu entwickeln</span
      >
      <span class="results__info"
        >Ja, das haben wir alle schon einmal gehört, aber der Autor sagt, dass
        dieser Tipp wirklich funktioniert. Die Fähigkeit, zwei Sprachen zu
        sprechen, hat viele Vorteile. Idealerweise ist es eine gute Idee, in der
        Kindheit eine zweite Sprache zu lernen.</span
      >
      <span class="results__info"
        >Wenn Sie eine Fremdsprache lernen, nimmt die Dichte Ihrer grauen
        Substanz zu. Daher können Sie intellektuelle Aufgaben besser lösen als
        Menschen, die nur eine Sprache sprechen können. Die Fähigkeit, in einer
        anderen Sprache zu denken, bietet Ihnen eine alternative Perspektive und
        daher verschiedene Möglichkeiten, dasselbe Problem zu lösen. Darüber
        hinaus ist Sprache ein Mittel, um unsere Denkweise zu organisieren und
        zu strukturieren.</span
      >
      <span class="results__info"
        >Darüber hinaus verbessern Aktivitäten wie Fernsehen oder Lesen in einer
        Fremdsprache die Elastizität unseres Gehirns und helfen uns,
        intelligenter zu werden. Wie man intelligenter wird: Warum nicht
        Lieblingsfernsehserien und -filme in ihrer Originalversion
        ansehen?</span
      >
      <span class="results__info results__title"
        >10- Umgeben Die sich mit intelligenten Menschen</span
      >
      <span class="results__info"
        >“Zeig mir wer deine Freunde sind und ich werde dir sagen, wer du bist
        ...” Wenn Sie von intelligenten Menschen umgeben sind, werden Sie sich
        bemühen, selbst intelligenter zu wirken: an Gesprächen teilzunehmen oder
        Ihre Meinung über ein bestimmtes Thema äußern zu können. Darüber hinaus
        hilft es Ihnen, in einer Gesellschaft kluger Leute zu sein, jeden Tag
        etwas Neues und Interessantes zu lernen. Wenn Sie stattdessen nur Themen
        wie Promi-Klatsch in Ihrem engen Kreis diskutieren, wird Ihr Gehirn
        wahrscheinlich oxidieren und Sie in einen Zombie verwandeln. So werden
        Sie intelligenter: Vermeiden Sie triviale und flache Menschen, versuchen
        Sie weniger fernzusehen und mehr zu lesen und zu reisen. Ihr Gehirn wird
        Ihnen dabei helfen.</span
      >
      <Copyright />
    </div>
  </div>
</template>

<script>
import { results } from "../text/results";
import Copyright from "@/text/Copyright";
export default {
  name: "Results.vue",
  props: ["device"],
  components: { Copyright },
  data() {
    return {
      text: results,
    };
  },
};
</script>

<style lang="scss">
.results {
  padding-top: 0;
  .wrapper {
    padding-top: 30px;
    padding-bottom: 0;
    @media (max-height: 700px), (max-width: 400px) {
      padding-top: 15px;
    }
  }
  .img {
    margin-bottom: 19px;
    width: 205px;
    height: 112px;
    @media (max-height: 700px), (max-width: 400px) {
      width: 170px;
      height: 91px;
    }
  }
  .copyright {
    margin-top: 20px;
    font-size: 11px;
    text-align: center;
    color: grey;
    a {
      color: grey;
      text-decoration: none;
    }
  }
  &__info {
    margin-bottom: 21px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    @media (max-height: 700px), (max-width: 400px) {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 13px;
    }
  }
  &__yellow {
    margin-top: 25px;
    text-align: left;
    color: #ffe066;
    font-weight: 600;
  }
  &__green {
    color: #36be57;
  }
  &__title {
    font-weight: 600;
  }
}
</style>
