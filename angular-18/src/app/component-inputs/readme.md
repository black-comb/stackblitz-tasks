# Aufgabe

0. Installieren Sie die npm-Pakete.
   >> npm i(nstall)
1. Routing: Passen Sie die Routingkonfiguration der Anwendung so an, dass ComponentInputsComponent unter der Standardroute ('') angezeigt wird. Verwenden Sie Lazy Loading, d.h. die Komponente soll nur dann geladen werden, wenn sie auch tatsächlich über die Route aktiviert wird.
   ```
   {
     path: '',
     pathMatch: 'full',
     loadComponent: () => import('./component-inputs-solution/component-inputs.component')
   }
   ```
2. ComponentInputsComponent:
   1. Fügen Sie eine `section` mit zwei untereinander dargestellten Text-Eingabefeldern hinzu. Binden Sie das erste an childData.title, das zweite an childData.content.
      >> Für [(ngModel)] wird FormsModule benötigt.
   2. Geben Sie darunter in einer weiteren `section` die Werte childData.title und childData.content aus.
   3. SCSS: Geben Sie den Sections einen schwarzen Rahmen, einen kleinen Innenabstand sowie einen Abstand nach unten. Vermeiden Sie die Verwendung von Pixeln.
3. ChildComponent
   1. Erstellen Sie eine Angular-Komponente namens "ChildComponent" unter src/app/component-inputs.
      >> ng g c child
   2. Ergänzen Sie die ChildComponent um einen obligatorischen Eingabeparameter "content" vom Typ ChildData.
   3. Geben Sie die Eigenschaften title und content des Eingabeparameters untereinander in der ChildComponent aus.
4. ComponentInputsComponent #2:
   1. Fügen Sie darunter in einer dritten `section` eine ChildComponent hinzu und übergeben Sie das Objekt childData an den in Schritt 1 erstellten Eingabeparameter.
5. Starten und testen Sie die Anwendung: npm run start.
6. Warum werden childData.title und .content nur einmal ausgegeben? Wie lässt sich das ändern?
