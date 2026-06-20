<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="hu">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>Basics of Data Loading and 3D Visualization in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation type="unfinished">Az adatbetöltés és a 3D vizualizáció alapjai a 3D Slicerben</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>Author: Sonia Pujol, Ph.D.</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation type="unfinished">Szerző: Sonia Pujol, Ph.D.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>24/11/2024</source>
        <extracomment>0_TextBox_2</extracomment>
        <translation type="unfinished">24/11/2024</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <source>Assistant Professor of Radiology Brigham and Women’s Hospital Harvard Medical School</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation type="unfinished">Radiológiai adjunktus, Brigham and Women’s Hospital, Harvard Medical School</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>Overall Goal</source>
        <extracomment>1_TextBox_0</extracomment>
        <translation type="unfinished">Általános cél</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="18"/>
        <source>This tutorial is an introduction to the basics of loading and viewing DICOM images and 3D models in 3D Slicer.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation type="unfinished">Ez az oktatóanyag bevezetés a DICOM képek és 3D modellek betöltésének és megtekintésének alapjaiba a 3D Slicerben.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>Learning Objectives</source>
        <extracomment>2_TextBox_0</extracomment>
        <translation type="unfinished">Tanulási célkitűzések</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source> • Following this tutorial, you will be able

• to load and visualize DICOM images in Slicer

• to perform volume rendering of CT data

• to load and visualize 3D models reconstructed from MRI data</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation type="unfinished"> • Az oktatóanyag elvégzése után képes lesz

• DICOM képeket betölteni és megjeleníteni a Slicerben

• CT adatok térfogat-megjelenítését elvégezni

• MRI adatokból rekonstruált 3D modelleket betölteni és megjeleníteni</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>Tutorial materials</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation type="unfinished">Az oktatóanyag segédanyagai</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>• 3D Slicer version 5.10

•  3D VisualizationDataSet.zip</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation type="unfinished">• 3D Slicer 5.10-es verzió

•  3D VisualizationDataSet.zip</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <location filename="text_dict_default.json" line="142"/>
        <source>Tutorial dataset</source>
        <extracomment>4_TextBox_0
----------
33_TextBox_0</extracomment>
        <translation type="unfinished">Oktatóanyag adatkészlet</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <source>The file 3DVisualizationDataset.zip contains two directories:

- dataset1_Thorax_Abdomen
- dataset2_Head

Unzip the file 3DVisualizationDataset.zip on your computer to access the datasets</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation type="unfinished">A 3DVisualizationDataset.zip fájl két könyvtárat tartalmaz:

- dataset1_Thorax_Abdomen
- dataset2_Head

Csomagolja ki a 3DVisualizationDataset.zip fájlt a számítógépén az adatkészletek eléréséhez</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>Disclaimer</source>
        <extracomment>5_TextBox_0</extracomment>
        <translation type="unfinished">Jogi nyilatkozat</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="34"/>
        <source>• 3D Slicer is a free open source software application distributed under a BSD style license.


• The software is not FDA approved or CE-Marked, and is for research use only.
</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation type="unfinished">• A 3D Slicer egy ingyenes, nyílt forráskódú szoftveralkalmazás, amelyet BSD típusú licenc alatt terjesztenek.


• A szoftvert az FDA nem hagyta jóvá és nem rendelkezik CE jelöléssel, kizárólag kutatási célokra használható.
</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Tutorial Outline</source>
        <extracomment>6_TextBox_0</extracomment>
        <translation type="unfinished">Az oktatóanyag áttekintése</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>•  Part 1: Loading and Viewing DICOM data

•  Part 2: Volume Rendering


• Part 3: Loading and Viewing 3D models</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation type="unfinished">•  1. rész: DICOM adatok betöltése és megtekintése

•  2. rész: Térfogat-megjelenítés


• 3. rész: 3D modellek betöltése és megtekintése</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Part 1: DICOM Data Loading</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation type="unfinished">1. rész: DICOM adatok betöltése</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <location filename="text_dict_default.json" line="48"/>
        <source>Loading a DICOM volume</source>
        <extracomment>8_LoadingaDICOMvolume_title
----------
9_LoadingaDICOMvolume_title</extracomment>
        <translation type="unfinished">DICOM kötet betöltése</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>Slicer displays the user interface of the DICOM module</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation type="unfinished">A Slicer megjeleníti a DICOM modul felhasználói felületét</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>The patient1 study contains a CT Thorax Abdomen dataset</source>
        <extracomment>8_TextBox_1</extracomment>
        <translation type="unfinished">A patient1 vizsgálat egy CT mellkas-has adatkészletet tartalmaz</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="50"/>
        <source>Select patient1 and click on Load
to load the dataset in Slicer</source>
        <extracomment>9_ArrowText_1</extracomment>
        <translation type="unfinished">Válassza ki a patient1 bejegyzést, majd kattintson a Betöltés gombra
az adatkészlet Slicerbe való betöltéséhez</translation>
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
        <translation type="unfinished">DICOM képek megjelenítése</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>Slicer displays the axial, coronal
and sagittal images of the CT
Thorax Abdomen dataset </source>
        <extracomment>10_TextBox_0</extracomment>
        <translation type="unfinished">A Slicer megjeleníti a CT mellkas-has adatkészlet
axiális, koronális és szagittális képeit</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Left click on DICOM to display
the list of modules of Slicer</source>
        <extracomment>11_ArrowText_1</extracomment>
        <translation type="unfinished">Kattintson bal gombbal a DICOM-ra
a Slicer moduljainak listájának megjelenítéséhez</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="60"/>
        <source>Select the module
Volumes</source>
        <extracomment>11_ArrowText_2</extracomment>
        <translation type="unfinished">Válassza ki a Volumes
modult</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="64"/>
        <source>Click on the CT-abdomen
preset to automatically adjust
the window/level display of the
CT dataset</source>
        <extracomment>12_ArrowText_0</extracomment>
        <translation type="unfinished">Kattintson a CT-abdomen
előbeállításra a CT adatkészlet
ablak/szint megjelenítésének
automatikus beállításához</translation>
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
        <translation type="unfinished">Vigye az egérkurzort a piros sáv fölé
a Red Viewer ablakban a szelet
menü megjelenítéséhez.


Kattintson a Lánc ikonra a szeletvezérlők
összekapcsolásához az összes
Szelet-nézetben.


Kattintson a Szem ikonra a három
anatómiai szelet megjelenítéséhez
a 3D nézetben</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>The three anatomical slices
appear in the 3D viewer.</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation type="unfinished">A három anatómiai szelet
megjelenik a 3D nézetben.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Click on the Slicer layout menu
icon, and select the
Conventional Widescreen layout</source>
        <extracomment>15_ArrowText_0</extracomment>
        <translation type="unfinished">Kattintson a Slicer elrendezés menü
ikonjára, és válassza a
Conventional Widescreen elrendezést</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>Slicer switches the layout
to Conventional
Widescreen layout</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation type="unfinished">A Slicer átvált a Conventional
Widescreen
elrendezésre</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>Use the right mouse button in the
3D Viewer to zoom in and out</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation type="unfinished">Használja a jobb egérgombot a
3D nézetben a nagyításhoz és kicsinyítéshez</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Use the left mouse button in the
3D Viewer to rotate the images</source>
        <extracomment>18_TextBox_0</extracomment>
        <translation type="unfinished">Használja a bal egérgombot a
3D nézetben a képek forgatásához</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="90"/>
        <location filename="text_dict_default.json" line="94"/>
        <source>3D Viewer Controller</source>
        <extracomment>19_3DViewerController_title
----------
20_3DViewerController_title</extracomment>
        <translation type="unfinished">3D nézet vezérlő</translation>
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
        <translation type="unfinished">Vigye az egérkurzort a gombostű ikon fölé
a 3D nézet ablak kék sávjában
a 3D nézet vezérlő megjelenítéséhez

Kattintson a 3D nézet vezérlő
felső sorának második ikonjára
a 3D nézet középre igazításához
a jelenetre</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>Select the Volume Rendering
module in the list of modules </source>
        <extracomment>20_ArrowText_1</extracomment>
        <translation type="unfinished">Válassza a Térfogat-megjelenítés
modult a modulok listájából</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="98"/>
        <source>Part 2: Volume Rendering</source>
        <extracomment>21_TextBox_0</extracomment>
        <translation type="unfinished">2. rész: Térfogat-megjelenítés</translation>
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
        <translation type="unfinished">Térfogat-megjelenítés</translation>
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
        <translation type="unfinished">• A térfogat-megjelenítési
technikák lehetővé teszik a 3D
adatkészletek 3D
vizualizációját

• A Slicer Térfogat-megjelenítés
modulja lehetővé teszi a DICOM
képek interaktív 3D
vizualizációját</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="106"/>
        <source>Click on Preset in the Display tab
and select the preset CT-Cardiac3 </source>
        <extracomment>23_ArrowText_0</extracomment>
        <translation type="unfinished">Kattintson az Előbeállítás gombra a Megjelenítés lapon
és válassza a CT-Cardiac3 előbeállítást</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="110"/>
        <source>Select VTK GPU Ray Casting Rendering
Click on the eye icon in the Volume tab to display
the volume rendered image in the 3D viewer</source>
        <extracomment>24_TextBox_2</extracomment>
        <translation type="unfinished">Válassza a VTK GPU Ray Casting Rendering lehetőséget
Kattintson a szem ikonra a Kötet lapon
a térfogat-megjelenítés megjelenítéséhez a 3D nézetben</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="114"/>
        <source>Use the shift slider to
change the transfer
function and display the
aorta</source>
        <extracomment>25_ArrowText_0</extracomment>
        <translation type="unfinished">Használja a tolóka csúszkát
az átviteli függvény
megváltoztatásához és az
aorta megjelenítéséhez</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="118"/>
        <source>Click on Display ROI to
display a region of interest
(ROI) in the 3D viewer and
check the option Enable</source>
        <extracomment>26_ArrowText_0</extracomment>
        <translation type="unfinished">Kattintson a ROI megjelenítése gombra
egy érdeklődési terület (ROI)
megjelenítéséhez a 3D nézetben, és
jelölje be az Engedélyezés opciót</translation>
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
        <translation type="unfinished">Kapcsolja ki az axiális, szagittális és
koronális szeletek láthatóságát
a 2D nézetben


Helyezze a ROI-t a bal vese köré
a színes fogantyúk segítségével</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="126"/>
        <source>Click on the eye icon to
display the volume rendered
image</source>
        <extracomment>28_ArrowText_0</extracomment>
        <translation type="unfinished">Kattintson a szem ikonra
a térfogat-megjelenítés
megjelenítéséhez</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="130"/>
        <source>Slicer displays the
volume rendered
image of the left kidney </source>
        <extracomment>29_TextBox_0</extracomment>
        <translation type="unfinished">A Slicer megjeleníti
a bal vese
térfogat-megjelenítési képét</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="134"/>
        <source>Extend the ROI to generate
a volume rendered image of
the right kidney</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation type="unfinished">Bővítse a ROI-t a jobb vese
térfogat-megjelenítési képének
létrehozásához</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="138"/>
        <source>Click on File, then Close Scene
in the main menu</source>
        <extracomment>31_ArrowText_1</extracomment>
        <translation type="unfinished">Kattintson a Fájl, majd a Jelenet bezárása
lehetőségre a főmenüben</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="140"/>
        <source>Part 3: Loading and
viewing 3D models
</source>
        <extracomment>32_TextBox_0</extracomment>
        <translation type="unfinished">3. rész: 3D modellek
betöltése és megtekintése
</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="144"/>
        <source>• The directory dataset2_Head contains the Slicer scene called Head_scene.mrb

• The scene contains 3D models from the SPL brain atlas developed by the department of Radiology at Brigham and Women’s Hospital, Harvard Medical School (NIH P41 RR013218, NIH R01 MH05074)</source>
        <extracomment>33_TextBox_1</extracomment>
        <translation type="unfinished">• A dataset2_Head könyvtár a Head_scene.mrb nevű Slicer jelenetet tartalmazza

• A jelenet 3D modelleket tartalmaz az SPL agyi atlaszból, amelyet a Brigham and Women’s Hospital, Harvard Medical School Radiológiai osztálya fejlesztett (NIH P41 RR013218, NIH R01 MH05074)</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="146"/>
        <source>Slicer Scene</source>
        <extracomment>34_TextBox_0</extracomment>
        <translation type="unfinished">Slicer jelenet</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="148"/>
        <source>Slicer stores all loaded data in a repository called a scene


Each data set, such as an image volume, surface model, or point set, is represented as a node in a Slicer scene.


All Slicer modules operate on the data stored in a Slicer scene.</source>
        <extracomment>34_TextBox_1</extracomment>
        <translation type="unfinished">A Slicer az összes betöltött adatot egy jelenet nevű adattárban tárolja


Minden adatkészlet, például képkötet, felszíni modell vagy ponthalmaz, csomópontként jelenik meg a Slicer jelenetben.


Az összes Slicer modul a Slicer jelenetben tárolt adatokon dolgozik.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="150"/>
        <source>Loading a Scene</source>
        <extracomment>35_LoadingaScene_title</extracomment>
        <translation type="unfinished">Jelenet betöltése</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="152"/>
        <source>Slicer displays a 3D
surface model of the
head and 2D MRI slices</source>
        <extracomment>35_TextBox_0</extracomment>
        <translation type="unfinished">A Slicer megjeleníti a fej
3D felszíni modelljét
és 2D MRI szeleteket</translation>
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
        <translation type="unfinished">3D modellek megtekintése</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="156"/>
        <source>Position the cursor over
the pin icon to reveal the
slice menu and click on
the eye icon to display the
axial slice in the 3D viewer</source>
        <extracomment>36_ArrowText_0</extracomment>
        <translation type="unfinished">Vigye a kurzort a gombostű ikon fölé
a szelet menü megjelenítéséhez, és
kattintson a szem ikonra az
axiális szelet megjelenítéséhez
a 3D nézetben</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="160"/>
        <source>Select the Models module
in the list of models</source>
        <extracomment>37_ArrowText_1</extracomment>
        <translation type="unfinished">Válassza a Modellek modult
a modellek listájában</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="164"/>
        <source>Slicer displays the list of
3D models loaded in the
scene

Select the model Skin.vtk</source>
        <extracomment>38_ArrowText_0</extracomment>
        <translation type="unfinished">A Slicer megjeleníti a jelenetbe
betöltött 3D modellek listáját

Válassza ki a Skin.vtk modellt</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="168"/>
        <source>Lower the opacity of
the Skin model using
the visibility slider</source>
        <extracomment>39_ArrowText_0</extracomment>
        <translation type="unfinished">Csökkentse a Skin modell
átlátszatlanságát
a láthatósági csúszkával</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="170"/>
        <source>The skull bone and
eyeballs models appear
through the skin</source>
        <extracomment>39_TextBox_1</extracomment>
        <translation type="unfinished">A koponyacsont és
a szemgolyó modellek
átlátszanak a bőrön</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="174"/>
        <source>Select the skull bone
model and click on the
eye icon to turn off its
visibility</source>
        <extracomment>40_ArrowText_1</extracomment>
        <translation type="unfinished">Válassza ki a koponyacsont
modellt, és kattintson a
szem ikonra a láthatóság
kikapcsolásához</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="176"/>
        <source>The white matter and
optic nerve models
appear through the skin</source>
        <extracomment>40_TextBox_2</extracomment>
        <translation type="unfinished">A fehérállomány és
a látóideg modellek
átlátszanak a bőrön</translation>
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
        <translation type="unfinished">Interakció 3D modellekkel</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="180"/>
        <source>Click on the eye icon to
display the coronal slice
in the 3D viewer</source>
        <extracomment>41_ArrowText_0</extracomment>
        <translation type="unfinished">Kattintson a szem ikonra
a koronális szelet
megjelenítéséhez a 3D nézetben</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="184"/>
        <source>Select the hemispheric
white matter model and
select the option Clipping</source>
        <extracomment>42_ArrowText_2</extracomment>
        <translation type="unfinished">Válassza ki a féltekei
fehérállomány modellt, és
válassza a Kivágás opciót</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="188"/>
        <source>Move the coronal slice
posteriorily to display the
optic chiasm</source>
        <extracomment>43_TextBox_0</extracomment>
        <translation type="unfinished">Mozgassa a koronális szeletet
hátrafele a
chiasma opticum megjelenítéséhez</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="192"/>
        <source>Slicer displays a 3D view of
the optic chiasm</source>
        <extracomment>44_TextBox_0</extracomment>
        <translation type="unfinished">A Slicer megjeleníti a
chiasma opticum 3D nézetét</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="194"/>
        <source>Conclusion</source>
        <extracomment>45_TextBox_0</extracomment>
        <translation type="unfinished">Összefoglalás</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="196"/>
        <source>• 3D Slicer provides advanced functionalities for loading and viewing 3D medical imaging data

• The tutorial demonstrates how to use volume rendering and 3D surface modeling for interactive visualization of CT and MRI data


Contact: spujol@bwh.harvard.edu</source>
        <extracomment>45_TextBox_1</extracomment>
        <translation type="unfinished">• A 3D Slicer fejlett funkciókat biztosít a 3D orvosi képalkotó adatok betöltéséhez és megtekintéséhez

• Az oktatóanyag bemutatja, hogyan kell a térfogat-megjelenítést és a 3D felszíni modellezést alkalmazni a CT és MRI adatok interaktív vizualizációjához


Kapcsolat: spujol@bwh.harvard.edu</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="198"/>
        <source>Acknowledgements</source>
        <extracomment>46_TextBox_0</extracomment>
        <translation type="unfinished">Köszönetnyilvánítás</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="200"/>
        <source>Neuroimage Analysis Center (NIBIB P41 EB015902)</source>
        <extracomment>46_TextBox_1</extracomment>
        <translation type="unfinished">Neuroimage Analysis Center (NIBIB P41 EB015902)</translation>
    </message>
</context>
</TS>
