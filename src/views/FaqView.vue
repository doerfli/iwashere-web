<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Häufige Fragen & Antworten</h1>

      <div class="columns">
        <div class="column">

          <Question question="Was ist Ich-war-da?"
                    answer="Auf Ich-war-da können Sie Ihre Kontaktdaten bei einem Besuch im Restaurant hinterlegen.
                            Im Falle einer COVID-19 Infektion während Ihrem Besuch hat der Wirt so die Möglichkeit" />

          <Question question="Für wen ist Ich-war-da gedacht?"
                    answer="Die Seite ist für alle Betriebe gemacht die eine einfache Gästeliste führen wollen und keine
                            eigene Infrastruktur und/oder Software dafür besitzen." />

          <Question question="Muss ich für jedes Lokal einen eigenen Account anlegen?"
                    answer="Sie können mit einem Account mehrere Lokale erfassen. Jedes Lokal erhält einen eigenen
                            QR Code resp. eine eigene URL unter der die Gäste ihre Daten hinterlegen können." />

          <Question question="Muss der Kunde das Formular bei jedem Besuch aufs neue ausfüllen?"
                    answer="Im Moment ja, in Zukunft möchten wir es ermöglichen die Daten zu hinterlegen und damit eine
                            automatische Registrierung zu ermöglichen." />

          <Question question="Muss ich eine spezielle Software installieren um Ich-war-da zu nutzen?"
                    answer="Nein, Sie müssen nichts installieren um Ich-war-da zu nutzen. Sie benötigen lediglich
                            einen aktuelle Webbrowser und eine Internetverbindung." />
        </div>
        <div class="column">
          <Question question="Was kostet Ich-war-da?"
                    answer="Wir befinden uns gerade in der Beta Phase der Entwicklung. Während dieser Zeit ist die Software
                            noch nicht stabil und es kann zu kleineren Ausfällen kommen. Daher ist die Dienstleistung zu
                            diesem Zeitpunkt noch gratis.
                            Nach der Beta Phase wird der Service einen kleinen Betrag kosten, die genauere Höhe ist aktuell
                            noch nicht klar. Als Beta-Kunde werden Sie jedoch einen speziellen Rabatt erhalten.
                            Was wir jetzt schon sagen können ist, dass der Preis sich nicht an der Anzahl der
                            Kundenbesuche orientieren wird." />

          <Question question="Was bedeutet Beta-Phase?"
                    answer="Die Applikation befindet sich derzeit noch in der Entwicklung. Wir arbeiten laufend an neuen
                            Funktionen. Dadurch kann es zu unerwarteten Fehlern oder geringfügigen Einschränkungen im Betrieb
                            kommen. Wir versuchen natürlich diese Einschränkungen so gering wie möglich zu halten.
                            Als Beta Kunde erhalten Sie einen speziellen Rabatt, wenn unsere Dienstleistung einmal
                            kostenpflichtig wird." />

          <Question question="Wo werden die Daten gespeichert?"
                    answer="Unsere Server befinden sich in einem Rechenzentrum in der EU. Server in der Schweiz sind
                            für die Zukunft geplant." />

          <Question question="Wie lange werden die Kundendaten gespeichert?"
                    answer="Die Daten der registrierten Kunden werden nach 14 Tagen automatisch gelöscht." />

          <Question question="Wer kann auf die gespeicherten Daten zugreifen?"
                    answer="Aktuell kann nur der Benutzer der das Lokal erfasst hat die Daten einsehen.
                            in naher Zukunft werden wir die Möglichkeit bieten, dass mehrere Benutzer (zb ihre Angestellten)
                            mit einem eigenen Konto Zugriff auf die Gästeliste haben. Dann müssen Sie die Konten nicht teilen." />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Question from '@/components/common/Question.vue';

@Component({
    components: {Question}
  })
  export default class FaqView extends Vue {

  }
</script>

<style scoped>

</style>

