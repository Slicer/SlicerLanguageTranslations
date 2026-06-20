<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>Basics of Data Loading and 3D Visualization in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation>Grundlagen der Datenbelastung und 3D-Visualisierung in 3D Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>Author: Sonia Pujol, Ph.D.</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation type="unfinished">Autorin: Dr. Sonia Pujol</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>24/11/2024</source>
        <extracomment>0_TextBox_2</extracomment>
        <translation type="unfinished">24.11.2024</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <source>Assistant Professor of Radiology Brigham and Women’s Hospital Harvard Medical School</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation type="unfinished">Assistenzprofessor für Radiologie am Brigham and Women’s Hospital der Harvard Medical School</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>Overall Goal</source>
        <extracomment>1_TextBox_0</extracomment>
        <translation type="unfinished">Gesamtziel</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="18"/>
        <source>This tutorial is an introduction to the basics of loading and viewing DICOM images and 3D models in 3D Slicer.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation type="unfinished">Dieses Tutorial bietet eine Einführung in die Grundlagen des Ladens und Anzeigens von DICOM-Bildern und 3D-Modellen in 3D Slicer.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>Learning Objectives</source>
        <extracomment>2_TextBox_0</extracomment>
        <translation type="unfinished">Lernziele</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source> • Following this tutorial, you will be able

• to load and visualize DICOM images in Slicer

• to perform volume rendering of CT data

• to load and visualize 3D models reconstructed from MRI data</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation type="unfinished"> • Nach Abschluss dieses Tutorials sind Sie in der Lage,

• DICOM-Bilder in Slicer zu laden und darzustellen,

• ein Volumenrendering von CT-Daten durchzuführen,

• aus MRT-Daten rekonstruierte 3D-Modelle zu laden und darzustellen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>Tutorial materials</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation type="unfinished">Tutorial-Materialien</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>• 3D Slicer version 5.10

•  3D VisualizationDataSet.zip</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation type="unfinished">• 3D Slicer Version 5.10

•  3D VisualizationDataSet.zip</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <location filename="text_dict_default.json" line="142"/>
        <source>Tutorial dataset</source>
        <extracomment>4_TextBox_0
----------
33_TextBox_0</extracomment>
        <translation type="unfinished">Tutorial zum Datensatz</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <source>The file 3DVisualizationDataset.zip contains two directories:

- dataset1_Thorax_Abdomen 
- dataset2_Head

Unzip the file 3DVisualizationDataset.zip on your computer to access the datasets</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation type="unfinished">Die Datei „3DVisualizationDataset.zip“ enthält zwei Verzeichnisse:

- dataset1_Thorax_Abdomen 
- dataset2_Head

Entpacken Sie die Datei „3DVisualizationDataset.zip“ auf Ihrem Computer, um auf die Datensätze zuzugreifen.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>Disclaimer</source>
        <extracomment>5_TextBox_0</extracomment>
        <translation type="unfinished">Haftungsausschluss</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="34"/>
        <source>• 3D Slicer is a free open source software application distributed under a BSD style license. 


• The software is not FDA approved or CE-Marked, and is for research use only.
</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation type="unfinished">• 3D Slicer ist eine kostenlose Open-Source-Software, die unter einer BSD-ähnlichen Lizenz vertrieben wird.


• Die Software ist weder von der FDA zugelassen noch mit dem CE-Zeichen versehen und ist ausschließlich für Forschungszwecke bestimmt.
</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Tutorial Outline</source>
        <extracomment>6_TextBox_0</extracomment>
        <translation type="unfinished">Übersicht über das Tutorial</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>•  Part 1: Loading and Viewing DICOM data

•  Part 2: Volume Rendering


• Part 3: Loading and Viewing 3D models</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation type="unfinished">•  Teil 1: Laden und Anzeigen von DICOM-Daten

•  Teil 2: Volumenrendering


• Teil 3: Laden und Anzeigen von 3D-Modellen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Part 1: DICOM Data Loading</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation type="unfinished">Teil 1: Laden von DICOM-Daten</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <location filename="text_dict_default.json" line="48"/>
        <source>Loading a DICOM volume</source>
        <extracomment>8_LoadingaDICOMvolume_title
----------
9_LoadingaDICOMvolume_title</extracomment>
        <translation type="unfinished">Ein DICOM-Volumen laden</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>Slicer displays the user interface of the DICOM module</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation type="unfinished">Slicer zeigt die Benutzeroberfläche des DICOM-Moduls an</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>The patient1 study contains a CT Thorax Abdomen dataset</source>
        <extracomment>8_TextBox_1</extracomment>
        <translation type="unfinished">Die Studie „Patient1“ enthält einen CT-Datensatz des Thorax und des Abdomens</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="50"/>
        <source>Select patient1 and click on Load 
to load the dataset in Slicer</source>
        <extracomment>9_ArrowText_1</extracomment>
        <translation type="unfinished">Wählen Sie „Patient1“ aus und klicken Sie auf „Laden“
, um den Datensatz in Slicer zu laden</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="52"/>
        <location filename="text_dict_default.json" line="56"/>
        <location filename="text_dict_default.json" line="62"/>
        <location filename="text_dict_default.json" line="66"/>
        <location filename="text_dict_default.json" line="70"/>
        <location filename="text_dict_default.json" line="74"/>
        <location filename="text_dict_default.json" line="78"/>
        <location filename="text_dict_default.json" line="82"/>
        <location filename="text_dict_default.json" line="86"/>
        <source>Visualizing DICOM images</source>
        <extracomment>10_VisualizingDICOMimages_title
----------
11_VisualizingDICOMimages_title
----------
12_VisualizingDICOMimages_title
----------
13_VisualizingDICOMimages_title
----------
14_VisualizingDICOMimages_title
----------
15_VisualizingDICOMimages_title
----------
16_VisualizingDICOMimages_title
----------
17_VisualizingDICOMimages_title
----------
18_VisualizingDICOMimages_title</extracomment>
        <translation type="unfinished">Visualisierung von DICOM-Bildern</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>Slicer displays the axial, coronal 
and sagittal images of the CT 
Thorax Abdomen dataset </source>
        <extracomment>10_TextBox_0</extracomment>
        <translation type="unfinished">Der Slicer zeigt die axialen, koronalen 
und sagittalen Bilder des CT-Datensatzes 
„Thorax Abdomen“ an </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Left click on DICOM to display 
the list of modules of Slicer</source>
        <extracomment>11_ArrowText_1</extracomment>
        <translation type="unfinished">Klicken Sie mit der linken Maustaste auf „DICOM“, um 
die Liste der Slicer-Module anzuzeigen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="60"/>
        <source>Select the module 
Volumes</source>
        <extracomment>11_ArrowText_2</extracomment>
        <translation type="unfinished">Wählen Sie das Modul 
„Volumes“ aus</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="64"/>
        <source>Click on the CT-abdomen 
preset to automatically adjust 
the window/level display of the 
CT dataset</source>
        <extracomment>12_ArrowText_0</extracomment>
        <translation type="unfinished">Klicken Sie auf die Voreinstellung „CT-Abdomen“, 
um die 
Fenster-/Pegelanzeige des 
CT-Datensatzes automatisch anzupassen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="68"/>
        <source>Position the mouse cursor 
over the red banner in the 
Red Viewer to display the slice 
menu.


Click on the Links icon to link 
the slice controls across all 
Slice Viewers. 


Click on the Eye icon to
display the three anatomical 
slices in the 3D Viewer</source>
        <extracomment>13_TextBox_1</extracomment>
        <translation type="unfinished">Bewegen Sie den Mauszeiger 
über das rote Banner im 
„Red Viewer“, um das Schnittmenü 
anzuzeigen.


Klicken Sie auf das Symbol „Links“, um 
die Schnittsteuerelemente über alle 
Schnitt-Viewer hinweg zu verknüpfen. 


Klicken Sie auf das Augensymbol, um
die drei anatomischen 
Schnitte im 3D-Viewer anzuzeigen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>The three anatomical slices 
appear in the 3D viewer.</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation type="unfinished">Die drei anatomischen Schnitte 
werden im 3D-Viewer angezeigt.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Click on the Slicer layout menu 
icon, and select the 
Conventional Widescreen layout</source>
        <extracomment>15_ArrowText_0</extracomment>
        <translation type="unfinished">Klicken Sie auf das Symbol für das Slicer-Layout-Menü 
und wählen Sie das 
Layout „Conventional Widescreen“ aus</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>Slicer switches the layout 
to Conventional 
Widescreen layout</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation type="unfinished">Slicer wechselt das Layout 
zu „Konventionell“ 
„Breitbild-Layout“</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>Use the right mouse button in the 
3D Viewer to zoom in and out</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation type="unfinished">Verwenden Sie die rechte Maustaste im 
3D-Viewer, um die Ansicht zu vergrößern und zu verkleinern</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Use the left mouse button in the 
3D Viewer to rotate the images</source>
        <extracomment>18_TextBox_0</extracomment>
        <translation type="unfinished">Verwenden Sie die linke Maustaste im 
3D-Viewer, um die Bilder zu drehen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="90"/>
        <location filename="text_dict_default.json" line="94"/>
        <source>3D Viewer Controller</source>
        <extracomment>19_3DViewerController_title
----------
20_3DViewerController_title</extracomment>
        <translation type="unfinished">3D-Viewer-Controller</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="92"/>
        <source>Position the mouse cursor over 
the pin icon in the blue banner 
of the 3D viewer window to 
display the 3DView controller

Click on the second icon on the 
top row of the 3DView 
controller to center the 3D view 
on the scene</source>
        <extracomment>19_TextBox_1</extracomment>
        <translation type="unfinished">Bewegen Sie den Mauszeiger über 
das Stecknadel-Symbol im blauen Banner 
des 3D-Viewer-Fensters, um 
den 3DView-Controller anzuzeigen

Klicken Sie auf das zweite Symbol in der 
oberen Reihe des 3DView-Controllers, 
um die 3D-Ansicht 
auf die Szene zu zentrieren</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>Select the Volume Rendering 
module in the list of modules </source>
        <extracomment>20_ArrowText_1</extracomment>
        <translation type="unfinished">Wählen Sie das Modul „Volumenrendering“ 
aus der Liste der Module aus </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="98"/>
        <source>Part 2: Volume Rendering</source>
        <extracomment>21_TextBox_0</extracomment>
        <translation type="unfinished">Teil 2: Volumenrendering</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="100"/>
        <location filename="text_dict_default.json" line="104"/>
        <location filename="text_dict_default.json" line="108"/>
        <location filename="text_dict_default.json" line="112"/>
        <location filename="text_dict_default.json" line="116"/>
        <location filename="text_dict_default.json" line="120"/>
        <location filename="text_dict_default.json" line="124"/>
        <location filename="text_dict_default.json" line="128"/>
        <location filename="text_dict_default.json" line="132"/>
        <location filename="text_dict_default.json" line="136"/>
        <source>Volume Rendering</source>
        <extracomment>22_TextBox_0
----------
23_VolumeRendering_title
----------
24_VolumeRendering_title
----------
25_VolumeRendering_title
----------
26_VolumeRendering_title
----------
27_VolumeRendering_title
----------
28_VolumeRendering_title
----------
29_VolumeRendering_title
----------
30_VolumeRendering_title
----------
31_VolumeRendering_title</extracomment>
        <translation type="unfinished">Volumenrendering</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="102"/>
        <source>• Volume rendering 
techniques enable 3D 
visualization of 3D 
datasets

• The Volume Rendering 
module in Slicer enables 
interactive 3D visualization 
of DICOM images</source>
        <extracomment>22_TextBox_1</extracomment>
        <translation type="unfinished">• Volumenrendering-Techniken 
ermöglichen die 3D-Visualisierung 
von 3D-Datensätzen

• Das Volumenrendering-Modul 
in Slicer ermöglicht 
die interaktive 3D-Visualisierung 
von DICOM-Bildern</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="106"/>
        <source>Click on Preset in the Display tab 
and select the preset CT-Cardiac3 </source>
        <extracomment>23_ArrowText_0</extracomment>
        <translation type="unfinished">Klicken Sie auf der Registerkarte „Anzeige“ auf „Voreinstellung“ 
und wählen Sie die Voreinstellung „CT-Cardiac3“ aus. </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="110"/>
        <source>Select VTK GPU Ray Casting Rendering
Click on the eye icon in the Volume tab to display 
the volume rendered image in the 3D viewer</source>
        <extracomment>24_TextBox_2</extracomment>
        <translation type="unfinished">Wählen Sie „VTK GPU Ray Casting Rendering“ aus.
Klicken Sie auf das Augensymbol auf der Registerkarte „Volume“, um 
das volumengerenderte Bild im 3D-Viewer anzuzeigen.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="114"/>
        <source>Use the shift slider to 
change the transfer 
function and display the
aorta</source>
        <extracomment>25_ArrowText_0</extracomment>
        <translation type="unfinished">Verwenden Sie den Shift-Schieberegler, um 
die Übertragungsfunktion 
zu ändern und die
Aorta anzuzeigen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="118"/>
        <source>Click on Display ROI to 
display a region of interest 
(ROI) in the 3D viewer and 
check the option Enable</source>
        <extracomment>26_ArrowText_0</extracomment>
        <translation type="unfinished">Klicken Sie auf „ROI anzeigen“, um 
einen Untersuchungsbereich 
(ROI) im 3D-Viewer anzuzeigen, und 
aktivieren Sie die Option „Aktivieren“.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="122"/>
        <source>Turn off the visibility of the 
axial, sagittal and coronal 
slices in the 2D viewer 


Position the ROI around the 
left kidney using the color 
handles</source>
        <extracomment>27_TextBox_0</extracomment>
        <translation type="unfinished">Deaktivieren Sie die Darstellung der 
axialen, sagittalen und koronalen 
Schnitte im 2D-Viewer 


Positionieren Sie die ROI um die 
linke Niere mithilfe der farbigen 
Zuggriffe</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="126"/>
        <source>Click on the eye icon to 
display the volume rendered 
image</source>
        <extracomment>28_ArrowText_0</extracomment>
        <translation type="unfinished">Klicken Sie auf das Augensymbol, um 
das volumengestützte 
Bild anzuzeigen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="130"/>
        <source>Slicer displays the 
volume rendered 
image of the left kidney </source>
        <extracomment>29_TextBox_0</extracomment>
        <translation type="unfinished">Slicer zeigt das 
volumengestützte 
Bild der linken Niere an </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="134"/>
        <source>Extend the ROI to generate 
a volume rendered image of 
the right kidney</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation type="unfinished">Vergrößern Sie den ROI, um 
ein volumetrisch gerendertes Bild 
der rechten Niere zu erzeugen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="138"/>
        <source>Click on File, then Close Scene
in the main menu</source>
        <extracomment>31_ArrowText_1</extracomment>
        <translation type="unfinished">Klicken Sie im Hauptmenü auf „Datei“ und dann auf „Szene schließen“
.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="140"/>
        <source>Part 3: Loading and 
viewing 3D models
</source>
        <extracomment>32_TextBox_0</extracomment>
        <translation type="unfinished">Teil 3: Laden und 
Anzeigen von 3D-Modellen
</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="144"/>
        <source>• The directory dataset2_Head contains the Slicer scene called Head_scene.mrb

• The scene contains 3D models from the SPL brain atlas developed by the department of Radiology at Brigham and Women’s Hospital, Harvard Medical School (NIH P41 RR013218, NIH R01 MH05074)</source>
        <extracomment>33_TextBox_1</extracomment>
        <translation type="unfinished">• Das Verzeichnis „dataset2_Head“ enthält die Slicer-Szene „Head_scene.mrb“

• Die Szene enthält 3D-Modelle aus dem SPL-Hirnatlas, der von der Abteilung für Radiologie am Brigham and Women’s Hospital der Harvard Medical School entwickelt wurde (NIH P41 RR013218, NIH R01 MH05074)</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="146"/>
        <source>Slicer Scene</source>
        <extracomment>34_TextBox_0</extracomment>
        <translation type="unfinished">Slicer-Szene</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="148"/>
        <source>Slicer stores all loaded data in a repository called a scene


Each data set, such as an image volume, surface model, or point set, is represented as a node in a Slicer scene.


All Slicer modules operate on the data stored in a Slicer scene.</source>
        <extracomment>34_TextBox_1</extracomment>
        <translation type="unfinished">Slicer speichert alle geladenen Daten in einem Repository, das als „Szene“ bezeichnet wird.


Jeder Datensatz, wie beispielsweise ein Bildvolumen, ein Oberflächenmodell oder eine Punktmenge, wird in einer Slicer-Szene als Knoten dargestellt.


Alle Slicer-Module arbeiten mit den in einer Slicer-Szene gespeicherten Daten.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="150"/>
        <source>Loading a Scene</source>
        <extracomment>35_LoadingaScene_title</extracomment>
        <translation type="unfinished">Eine Szene laden</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="152"/>
        <source>Slicer displays a 3D 
surface model of the 
head and 2D MRI slices</source>
        <extracomment>35_TextBox_0</extracomment>
        <translation type="unfinished">Slicer zeigt ein 3D-
Oberflächenmodell des 
Kopfes sowie 2D-MRT-Schnitte an</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="154"/>
        <location filename="text_dict_default.json" line="158"/>
        <location filename="text_dict_default.json" line="162"/>
        <location filename="text_dict_default.json" line="166"/>
        <location filename="text_dict_default.json" line="172"/>
        <source>Viewing 3D models</source>
        <extracomment>36_Viewing3Dmodels_title
----------
37_Viewing3Dmodels_title
----------
38_Viewing3Dmodels_title
----------
39_Viewing3Dmodels_title
----------
40_Viewing3Dmodels_title</extracomment>
        <translation type="unfinished">3D-Modelle anzeigen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="156"/>
        <source>Position the cursor over 
the pin icon to reveal the 
slice menu and click on 
the eye icon to display the 
axial slice in the 3D viewer</source>
        <extracomment>36_ArrowText_0</extracomment>
        <translation type="unfinished">Bewegen Sie den Cursor über 
das Stecknadel-Symbol, um das 
Schnittmenü anzuzeigen, und klicken Sie auf 
das Augensymbol, um den 
axialen Schnitt im 3D-Viewer anzuzeigen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="160"/>
        <source>Select the Models module 
in the list of models</source>
        <extracomment>37_ArrowText_1</extracomment>
        <translation type="unfinished">Wählen Sie das Modul „Modelle“ 
in der Modellliste aus</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="164"/>
        <source>Slicer displays the list of 
3D models loaded in the 
scene

Select the model Skin.vtk</source>
        <extracomment>38_ArrowText_0</extracomment>
        <translation type="unfinished">Slicer zeigt die Liste der 
in die 
Szene geladenen 3D-Modelle an

Wählen Sie das Modell „Skin.vtk“ aus</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="168"/>
        <source>Lower the opacity of 
the Skin model using 
the visibility slider</source>
        <extracomment>39_ArrowText_0</extracomment>
        <translation type="unfinished">Verringern Sie die Deckkraft 
des Hautmodells mithilfe 
des Sichtbarkeitsreglers</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="170"/>
        <source>The skull bone and 
eyeballs models appear 
through the skin</source>
        <extracomment>39_TextBox_1</extracomment>
        <translation type="unfinished">Die Modelle des Schädelknochens und 
der Augäpfel sind 
durch die Haut hindurch zu sehen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="174"/>
        <source>Select the skull bone 
model and click on the 
eye icon to turn off its 
visibility</source>
        <extracomment>40_ArrowText_1</extracomment>
        <translation type="unfinished">Wählen Sie das Schädelknochen-Modell 
aus und klicken Sie auf das 
Augensymbol, um dessen 
Sichtbarkeit zu deaktivieren</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="176"/>
        <source>The white matter and 
optic nerve models 
appear through the skin</source>
        <extracomment>40_TextBox_2</extracomment>
        <translation type="unfinished">Die Modelle der weißen Substanz und 
des Sehnervs 
sind durch die Haut hindurch sichtbar</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="178"/>
        <location filename="text_dict_default.json" line="182"/>
        <location filename="text_dict_default.json" line="186"/>
        <location filename="text_dict_default.json" line="190"/>
        <source>Interacting with 3D models</source>
        <extracomment>41_Interactingwith3Dmodels_title
----------
42_Interactingwith3Dmodels_title
----------
43_Interactingwith3Dmodels_title
----------
44_Interactingwith3Dmodels_title</extracomment>
        <translation type="unfinished">Interaktion mit 3D-Modellen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="180"/>
        <source>Click on the eye icon to 
display the coronal slice 
in the 3D viewer</source>
        <extracomment>41_ArrowText_0</extracomment>
        <translation type="unfinished">Klicken Sie auf das Augensymbol, um 
den koronalen Schnitt 
im 3D-Viewer anzuzeigen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="184"/>
        <source>Select the hemispheric 
white matter model and 
select the option Clipping</source>
        <extracomment>42_ArrowText_2</extracomment>
        <translation type="unfinished">Wählen Sie das hemisphärische 
Modell der weißen Substanz aus und 
aktivieren Sie die Option „Clipping“</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="188"/>
        <source>Move the coronal slice 
posteriorily to display the 
optic chiasm</source>
        <extracomment>43_TextBox_0</extracomment>
        <translation type="unfinished">Verschieben Sie den koronalen Schnitt 
nach posterior, um das 
Chiasma opticum darzustellen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="192"/>
        <source>Slicer displays a 3D view of 
the optic chiasm</source>
        <extracomment>44_TextBox_0</extracomment>
        <translation type="unfinished">Slicer zeigt eine 3D-Ansicht 
des Chiasma opticum an</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="194"/>
        <source>Conclusion</source>
        <extracomment>45_TextBox_0</extracomment>
        <translation type="unfinished">Fazit</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="196"/>
        <source>• 3D Slicer provides advanced functionalities for loading and viewing 3D medical imaging data

• The tutorial demonstrates how to use volume rendering and 3D surface modeling for interactive visualization of CT and MRI data


Contact: spujol@bwh.harvard.edu</source>
        <extracomment>45_TextBox_1</extracomment>
        <translation type="unfinished">• 3D Slicer bietet erweiterte Funktionen zum Laden und Anzeigen medizinischer 3D-Bilddaten

• Das Tutorial zeigt, wie man Volumenrendering und 3D-Oberflächenmodellierung zur interaktiven Visualisierung von CT- und MRT-Daten einsetzt


Kontakt: spujol@bwh.harvard.edu</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="198"/>
        <source>Acknowledgements</source>
        <extracomment>46_TextBox_0</extracomment>
        <translation type="unfinished">Danksagungen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="200"/>
        <source>Neuroimage Analysis Center (NIBIB P41 EB015902)</source>
        <extracomment>46_TextBox_1</extracomment>
        <translation type="unfinished">Zentrum für Neurobildanalyse (NIBIB P41 EB015902)</translation>
    </message>
</context>
</TS>
