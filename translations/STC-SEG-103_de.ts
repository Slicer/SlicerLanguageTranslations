<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>AI-based Segmentation in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation>AI-Basisbezogene Aufteilung in 3D Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>Sonia Pujol, Ph. D. 
Brigham and Women&apos;s Hospital,
Harvard Medical School
Boston, MA</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation type="unfinished">Dr. Sonia Pujol 
Brigham and Women’s Hospital,
Harvard Medical School
Boston, MA</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>Slicer Ribeirão Preto Workshop
June 30, 2025</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation type="unfinished">Slicer-Workshop in Ribeirão Preto
30. Juni 2025</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <location filename="text_dict_default.json" line="18"/>
        <source>Manual vs AI-powered Segmentation</source>
        <extracomment>1_TextBox_0
----------
2_TextBox_0</extracomment>
        <translation type="unfinished">Manuelle vs. KI-gestützte Segmentierung</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>Medical images have traditionally been manually segmented, which is a time-consuming process that requires intensive effort by radiologists and is subject to inter-reader variability.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation type="unfinished">Medizinische Bilder wurden bisher in der Regel manuell segmentiert – ein zeitaufwändiger Prozess, der einen hohen Aufwand seitens der Radiologen erfordert und mit Abweichungen zwischen den einzelnen Befundern behaftet ist.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>In the past decade, image segmentation has been powered by the development of deep learning algorithms (e.g. nnUnet by the German Cancer Research Center (DKFZ)/Helmholtz Research).


AI-powered segmentation tools can reduce the segmentation time and provide more reproducible results.</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation type="unfinished">In den letzten zehn Jahren wurde die Bildsegmentierung durch die Entwicklung von Deep-Learning-Algorithmen vorangetrieben (z. B. nnUnet des Deutschen Krebsforschungszentrums (DKFZ) und der Helmholtz-Gemeinschaft).


KI-gestützte Segmentierungswerkzeuge können die Segmentierungszeit verkürzen und reproduzierbarere Ergebnisse liefern.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source>AI Terminology</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation type="unfinished">KI-Fachbegriffe</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>A Model is an AI algorithm that was trained to perform a specific task (e.g. brain tumor segmentation model).

The Weights of an AI model are small numbers that determine how much importance the model gives to different image features.

During the Training phase, a model learns patterns from data labelled by experts and adjusts its weights to improve its predictions.

During the Validation/Test phase, the model is evaluated on a separate set of data not used during the Training phase.

During Inference, the model is applied to new datasets to perform the specific task it was trained for.</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation type="unfinished">Ein Modell ist ein KI-Algorithmus, der darauf trainiert wurde, eine bestimmte Aufgabe auszuführen (z. B. ein Modell zur Segmentierung von Hirntumoren).

Die Gewichte eines KI-Modells sind kleine Zahlen, die bestimmen, welche Bedeutung das Modell den verschiedenen Bildmerkmalen beimisst.

Während der Trainingsphase lernt ein Modell Muster aus von Experten beschrifteten Daten und passt seine Gewichte an, um seine Vorhersagen zu verbessern.

Während der Validierungs-/Testphase wird das Modell anhand eines separaten Datensatzes bewertet, der während der Trainingsphase nicht verwendet wurde.

Bei der Inferenz wird das Modell auf neue Datensätze angewendet, um die spezifische Aufgabe auszuführen, für die es trainiert wurde.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>3D Slicer AI Tutorial</source>
        <extracomment>4_TextBox_0</extracomment>
        <translation type="unfinished">3D Slicer AI-Tutorial</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <source>This tutorial focuses on running inference tasks using various pre-trained AI models for automated segmentation of anatomical and pathological structures.</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation type="unfinished">Im Mittelpunkt dieses Tutorials steht die Durchführung von Inferenzaufgaben unter Verwendung verschiedener vortrainierter KI-Modelle zur automatisierten Segmentierung anatomischer und pathologischer Strukturen.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <location filename="text_dict_default.json" line="34"/>
        <source>MONAIAuto3DSeg Slicer extension</source>
        <extracomment>5_TextBox_0
----------
6_TextBox_0</extracomment>
        <translation type="unfinished">MONAIAuto3DSeg Slicer-Erweiterung</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>This tutorial uses the pre-trained models of the MONAIAuto3DSeg Slicer extension.


The tool is designed to work on laptops or on average desktop computer without a GPU.</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation type="unfinished">In diesem Tutorial werden die vortrainierten Modelle der Erweiterung „MONAIAuto3DSeg Slicer“ verwendet.


Das Tool ist für den Einsatz auf Laptops oder durchschnittlichen Desktop-Computern ohne GPU ausgelegt.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Multiple modalities Support (CT, MRI).


Multiple anatomies (head, thorax, abdomen, pelvis, etc.).


Multiple pathologies (tumor, hemorrhage, edema).</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation type="unfinished">Unterstützung verschiedener Bildgebungsverfahren (CT, MRT).


Verschiedene anatomische Bereiche (Kopf, Thorax, Abdomen, Becken usw.).


Verschiedene Erkrankungen (Tumor, Blutung, Ödem).</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>Slicer AI Tutorial: Segmentation Tasks</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation type="unfinished">Slicer-AI-Tutorial: Segmentierungsaufgaben</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Segmentation Task #1: Prostate 


Segmentation Task #2: Brain Glioma 


Segmentation Task #3: Whole Body Segmentation</source>
        <extracomment>7_TextBox_1</extracomment>
        <translation type="unfinished">Segmentierungsaufgabe Nr. 1: Prostata 


Segmentierungsaufgabe Nr. 2: Hirngliom 


Segmentierungsaufgabe Nr. 3: Ganzkörpersegmentierung</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <source>AI Segmentation Task #1: Prostate</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation type="unfinished">KI-Segmentierungsaufgabe Nr. 1: Prostata</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>AI-based Segmentation of Peripheral Zone (PZ) and Transition Zone (TZ) of the prostate on T2-weighted MRI Images.


Dataset:
msd_prostate_01-t2
msd_prostate_01-adc</source>
        <extracomment>9_TextBox_1</extracomment>
        <translation type="unfinished">KI-gestützte Segmentierung der peripheren Zone (PZ) und der Übergangszone (TZ) der Prostata auf T2-gewichteten MRT-Bildern.


Datensatz:
msd_prostate_01-t2
msd_prostate_01-adc</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>Click on Add Data in the Welcome to Slicer module

Click on Choose Directory to Add and browse to the location of the Slicer datasets

Select the dataset3_ProstateMRI and click on Open</source>
        <extracomment>10_TextBox_1</extracomment>
        <translation type="unfinished">Klicken Sie im Modul „Willkommen bei Slicer“ auf „Daten hinzufügen“.

Klicken Sie auf „Verzeichnis zum Hinzufügen auswählen“ und navigieren Sie zum Speicherort der Slicer-Datensätze.

Wählen Sie den Datensatz „dataset3_ProstateMRI“ aus und klicken Sie auf „Öffnen“.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="48"/>
        <source>Slicer loads the prostate MRI dataset</source>
        <extracomment>11_TextBox_0</extracomment>
        <translation type="unfinished">Slicer lädt den MRT-Datensatz der Prostata</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="50"/>
        <source>Click on Welcome to Slicer in the Modules&apos; menu and browse to the category Segmentation

Select the MONAIAuto3DSeg module</source>
        <extracomment>12_TextBox_0</extracomment>
        <translation type="unfinished">Klicken Sie im Menü „Module“ auf „Willkommen bei Slicer“ und navigieren Sie zur Kategorie „Segmentierung“.

Wählen Sie das Modul „MONAIAuto3DSeg“ aus.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="52"/>
        <source>Enter the model&apos;s name Prostate in the Segmentation model menu</source>
        <extracomment>13_TextBox_0</extracomment>
        <translation type="unfinished">Geben Sie im Menü „Segmentierungsmodell“ den Namen des Modells „Prostate“ ein.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>Select the model Prostate - Multisequence</source>
        <extracomment>13_TextBox_1</extracomment>
        <translation type="unfinished">Wählen Sie das Modell „Prostata – Multisequenz“ aus.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="56"/>
        <source>Enter the Input T2 volume msd-prostate-01-t2 and the Input ADC volume msd-prostate-01-adc</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation type="unfinished">Geben Sie das T2-Eingabevolumen „msd-prostate-01-t2“ und das ADC-Eingabevolumen „msd-prostate-01-adc“ ein.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Click on Create new segmentation on Apply</source>
        <extracomment>14_TextBox_1</extracomment>
        <translation type="unfinished">Klicken Sie unter „Anwenden“ auf „Neue Segmentierung erstellen“.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="60"/>
        <source>Slicer starts the inference</source>
        <extracomment>15_TextBox_0</extracomment>
        <translation type="unfinished">Slicer startet die Inferenz</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="62"/>
        <source>Slicer shows the results of the AI-based prostate segmentation</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation type="unfinished">Slicer zeigt die Ergebnisse der KI-basierten Prostatasegmentierung an</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="64"/>
        <source>AI Segmentation Task #2: Brain Glioma</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation type="unfinished">KI-Segmentierungsaufgabe Nr. 2: Hirngliom</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="66"/>
        <source>AI-based Segmentation of Neoplasm, Necrosis and Edema in Brain MRI images.


Datasets:
1) BraTS-GLI_00005-000-t1n (T1-weighted)
2) BraTS-GLI_00005-000-t1c (T1-weighted post-Gd)
3) BraTS-GLI_00005-000-t2w (T2-weighted)
4) BraTS-GLI_00005-000-t2f (T2-FLAIR )</source>
        <extracomment>18_TextBox_1</extracomment>
        <translation type="unfinished">KI-gestützte Segmentierung von Neoplasmen, Nekrosen und Ödemen in MRT-Bildern des Gehirns.


Datensätze:
1) BraTS-GLI_00005-000-t1n (T1-gewichtet)
2) BraTS-GLI_00005-000-t1c (T1-gewichtet nach Gd-Gabe)
3) BraTS-GLI_00005-000-t2w (T2-gewichtet)
4) BraTS-GLI_00005-000-t2f (T2-FLAIR)</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="68"/>
        <source>Click on Add Data in the Welcome to Slicer module

Click on Choose File(s) to Add and browse to the location of the Slicer datasets

In the subdirectory dataset4_BrainMRI_Glioma, select the four datasets BraTS-GLI-00006-t1c.nii.gz, BraTS-GLI-00006-t1n.nii.gz, BraTS-GLI-00006-t2f.nii.gz, BraTS-GLI-00006-t2w.nii.gz

Click on Open</source>
        <extracomment>19_TextBox_1</extracomment>
        <translation type="unfinished">Klicken Sie im Modul „Willkommen bei Slicer“ auf „Daten hinzufügen“

Klicken Sie auf „Datei(en) zum Hinzufügen auswählen“ und navigieren Sie zum Speicherort der Slicer-Datensätze

Wählen Sie im Unterverzeichnis „dataset4_BrainMRI_Glioma“ die vier Datensätze „BraTS-GLI-00006-t1c.nii.gz“, „BraTS-GLI-00006-t1n.nii.gz“, „BraTS-GLI-00006-t2f.nii.gz“ und „BraTS-GLI-00006-t2w.nii.gz“ aus

Klicken Sie auf „Öffnen“</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="70"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Brain Tumor Segmentation in the Segmentation model menu</source>
        <extracomment>20_TextBox_0</extracomment>
        <translation type="unfinished">Wählen Sie das Modul „MONAIAuto3DSeg“ aus und geben Sie im Menü „Segmentierungsmodell“ den Namen des Modells „Brain Tumor Segmentation“ ein.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>Select the model Brain Tumor Segmentation (BRATS) GLI</source>
        <extracomment>20_TextBox_1</extracomment>
        <translation type="unfinished">Wählen Sie das Modell „Brain Tumor Segmentation (BRATS) GLI“ aus.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="74"/>
        <source>Enter the input volumes as follows:

Input T2F volume: BraTS-GLI_00005-000-t2f
Input T1C volume: BraTS-GLI_00005-000-t1c
Input T1N volume: BraTS-GLI_00005-000-t1n
Input T2W volume: BraTS-GLI_00005-000-t2w


Click on Create new Segmentation on Apply

Click on Apply to start the segmentation</source>
        <extracomment>21_TextBox_0</extracomment>
        <translation type="unfinished">Geben Sie die Eingabevolumina wie folgt ein:

Eingabevolumen T2F: BraTS-GLI_00005-000-t2f
Eingabevolumen T1C: BraTS-GLI_00005-000-t1c
Eingabe-T1N-Volumen: BraTS-GLI_00005-000-t1n
Eingabe-T2W-Volumen: BraTS-GLI_00005-000-t2w


Klicken Sie unter „Anwenden“ auf „Neue Segmentierung erstellen“

Klicken Sie auf „Anwenden“, um die Segmentierung zu starten</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Slicer starts running the inference task

Once the segmentation is done, &apos;Processing finished&apos; appears in the Slicer GUI</source>
        <extracomment>22_TextBox_1</extracomment>
        <translation type="unfinished">Slicer beginnt mit der Ausführung der Inferenzaufgabe

Sobald die Segmentierung abgeschlossen ist, erscheint in der Slicer-Benutzeroberfläche die Meldung „Verarbeitung abgeschlossen“</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="78"/>
        <source>Click on Show 3D to display the 3D segments in the 3D Viewer</source>
        <extracomment>23_TextBox_1</extracomment>
        <translation type="unfinished">Klicken Sie auf „3D anzeigen“, um die 3D-Segmente im 3D-Viewer anzuzeigen.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>AI Segmentation Task #3: Whole Body Segmentation</source>
        <extracomment>24_TextBox_0</extracomment>
        <translation type="unfinished">KI-Segmentierungsaufgabe Nr. 3: Ganzkörpersegmentierung</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="82"/>
        <source>AI-based Segmentation of the whole body.


Dataset:
CT_ThoraxAbdomen</source>
        <extracomment>25_TextBox_1</extracomment>
        <translation type="unfinished">KI-gestützte Segmentierung des gesamten Körpers.


Datensatz:
CT_ThoraxAbdomen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>In the Add DICOM Data module, select the Patient patient1 and double click onthe image CT_Thorax_Abdomen to load it in Slicer</source>
        <extracomment>26_TextBox_0</extracomment>
        <translation type="unfinished">Wählen Sie im Modul „DICOM-Daten hinzufügen“ den Patienten „patient1“ aus und doppelklicken Sie auf das Bild „CT_Thorax_Abdomen“, um es in Slicer zu laden.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="86"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Whole Body Segmentation in the Segmentation model menu</source>
        <extracomment>27_TextBox_0</extracomment>
        <translation type="unfinished">Wählen Sie das Modul „MONAIAuto3DSeg“ aus und geben Sie im Menü „Segmentierungsmodell“ den Namen des Modells „Whole Body Segmentation“ ein.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Select the model Whole Body Segmentation TS1-quick</source>
        <extracomment>27_TextBox_1</extracomment>
        <translation type="unfinished">Wählen Sie das Modell „Ganzkörper-Segmentierung TS1-quick“ aus.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="90"/>
        <source>Select the input Volume 6:CT_Thorax_Abdomen,

Click on Create new Segmentation on Apply

Click on Apply to start the segmentation</source>
        <extracomment>28_TextBox_0</extracomment>
        <translation type="unfinished">Wählen Sie das Eingabevolumen „6:CT_Thorax_Abdomen“ aus,

klicken Sie unter „Übernehmen“ auf „Neue Segmentierung erstellen“

Klicken Sie auf „Übernehmen“, um die Segmentierung zu starten</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="92"/>
        <source>Slicer displays the results of the AI-based segmentation using the Whole Body Segmentation TS1-quick</source>
        <extracomment>29_TextBox_0</extracomment>
        <translation type="unfinished">Slicer zeigt die Ergebnisse der KI-basierten Segmentierung mithilfe der Ganzkörper-Segmentierung „TS1-quick“ an.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="94"/>
        <source>Conclusion</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation type="unfinished">Fazit</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>The 3D Slicer MONAIAuto3DSeg extension provides fast AI-based segmentation of anatomical and pathological structures.


The module can run on standard laptop and desktop computers with no GPU.</source>
        <extracomment>30_TextBox_1</extracomment>
        <translation type="unfinished">Die 3D Slicer-Erweiterung „MONAIAuto3DSeg“ ermöglicht eine schnelle, KI-basierte Segmentierung anatomischer und pathologischer Strukturen.


Das Modul kann auf handelsüblichen Laptops und Desktop-Computern ohne GPU ausgeführt werden.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="98"/>
        <source>Acknowledgements</source>
        <extracomment>31_TextBox_0</extracomment>
        <translation type="unfinished">Danksagungen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="100"/>
        <source>The 3D Slicer internationalization project and the 3D Slicer for Latin America project have been made possible through funding by the Chan Zuckerberg Initiative.</source>
        <extracomment>31_TextBox_1</extracomment>
        <translation type="unfinished">Das Internationalisierungsprojekt von 3D Slicer und das Projekt „3D Slicer für Lateinamerika“ wurden durch die finanzielle Unterstützung der Chan Zuckerberg Initiative ermöglicht.</translation>
    </message>
</context>
</TS>
