<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh-Hant">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>AI-based Segmentation in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation type="unfinished">3D Slicer 中基於人工智慧的分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>Sonia Pujol, Ph. D. 
Brigham and Women&apos;s Hospital,
Harvard Medical School
Boston, MA</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation type="unfinished">索尼亞·普霍爾（Sonia Pujol），博士
布里格姆婦女醫院，
哈佛醫學院
麻薩諸塞州波士頓</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>Slicer Ribeirão Preto Workshop
June 30, 2025</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation type="unfinished">里貝朗普雷圖 Slicer 工作坊
2025年6月30日</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <location filename="text_dict_default.json" line="18"/>
        <source>Manual vs AI-powered Segmentation</source>
        <extracomment>1_TextBox_0
----------
2_TextBox_0</extracomment>
        <translation type="unfinished">手動分割與 AI 驅動的分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>Medical images have traditionally been manually segmented, which is a time-consuming process that requires intensive effort by radiologists and is subject to inter-reader variability.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation type="unfinished">醫學影像向來都是透過人工進行分割，這是一個耗時且需要放射科醫師投入大量心力的過程，且容易受到讀片者間差異的影響。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>In the past decade, image segmentation has been powered by the development of deep learning algorithms (e.g. nnUnet by the German Cancer Research Center (DKFZ)/Helmholtz Research).


AI-powered segmentation tools can reduce the segmentation time and provide more reproducible results.</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation type="unfinished">在過去十年中，影像分割技術得益於深度學習演算法的發展（例如由德國癌症研究中心（DKFZ）／亥姆霍茲研究中心開發的 nnUnet）。


由人工智慧驅動的分割工具不僅能縮短分割時間，還能提供更具可重複性的結果。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source>AI Terminology</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation type="unfinished">人工智慧術語</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>A Model is an AI algorithm that was trained to perform a specific task (e.g. brain tumor segmentation model).

The Weights of an AI model are small numbers that determine how much importance the model gives to different image features.

During the Training phase, a model learns patterns from data labelled by experts and adjusts its weights to improve its predictions.

During the Validation/Test phase, the model is evaluated on a separate set of data not used during the Training phase.

During Inference, the model is applied to new datasets to perform the specific task it was trained for.</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation type="unfinished">模型是一種經過訓練、用於執行特定任務的人工智慧演算法（例如：腦腫瘤分割模型）。

人工智慧模型的權重是一組小數值，用以決定模型賦予不同影像特徵的重要性程度。

在訓練階段，模型會從專家標註的資料中學習模式，並調整其權重以改善預測結果。

在驗證／測試階段，模型會針對訓練階段未曾使用過的一組獨立資料進行評估。

在推論階段，模型會應用於新的資料集，以執行其受訓的特定任務。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>3D Slicer AI Tutorial</source>
        <extracomment>4_TextBox_0</extracomment>
        <translation type="unfinished">3D Slicer AI 教學指南</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <source>This tutorial focuses on running inference tasks using various pre-trained AI models for automated segmentation of anatomical and pathological structures.</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation type="unfinished">本教學重點在於利用各種預訓練的人工智慧模型執行推論任務，以實現解剖學及病理學結構的自動分割。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <location filename="text_dict_default.json" line="34"/>
        <source>MONAIAuto3DSeg Slicer extension</source>
        <extracomment>5_TextBox_0
----------
6_TextBox_0</extracomment>
        <translation type="unfinished">MONAIAuto3DSeg Slicer 擴充套件</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>This tutorial uses the pre-trained models of the MONAIAuto3DSeg Slicer extension.


The tool is designed to work on laptops or on average desktop computer without a GPU.</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation type="unfinished">本教學使用 MONAIAuto3DSeg Slicer 擴充套件的預訓練模型。


此工具設計用於筆記型電腦或未配備 GPU 的普通桌上型電腦。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Multiple modalities Support (CT, MRI).


Multiple anatomies (head, thorax, abdomen, pelvis, etc.).


Multiple pathologies (tumor, hemorrhage, edema).</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation type="unfinished">支援多種影像模態（CT、MRI）。


適用於多種解剖部位（頭部、胸腔、腹部、骨盆等）。


適用於多種病理狀況（腫瘤、出血、水腫）。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>Slicer AI Tutorial: Segmentation Tasks</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation type="unfinished">Slicer AI 教學：分割任務</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Segmentation Task #1: Prostate 


Segmentation Task #2: Brain Glioma 


Segmentation Task #3: Whole Body Segmentation</source>
        <extracomment>7_TextBox_1</extracomment>
        <translation type="unfinished">分割任務 #1：前列腺 


分割任務 #2：腦膠質瘤 


分割任務 #3：全身分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <source>AI Segmentation Task #1: Prostate</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation type="unfinished">AI 分割任務 #1：前列腺</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>AI-based Segmentation of Peripheral Zone (PZ) and Transition Zone (TZ) of the prostate on T2-weighted MRI Images.


Dataset:
msd_prostate_01-t2
msd_prostate_01-adc</source>
        <extracomment>9_TextBox_1</extracomment>
        <translation type="unfinished">基於人工智慧的前列腺周邊區（PZ）與過渡區（TZ）在 T2 加權 MRI 影像上的分割。


資料集：
msd_prostate_01-t2
msd_prostate_01-adc</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>Click on Add Data in the Welcome to Slicer module

Click on Choose Directory to Add and browse to the location of the Slicer datasets

Select the dataset3_ProstateMRI and click on Open</source>
        <extracomment>10_TextBox_1</extracomment>
        <translation type="unfinished">在「歡迎使用 Slicer」模組中，點擊「新增資料」

點擊「選擇要新增的目錄」，並瀏覽至 Slicer 資料集所在的位置

選取 dataset3_ProstateMRI，然後點擊「開啟」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="48"/>
        <source>Slicer loads the prostate MRI dataset</source>
        <extracomment>11_TextBox_0</extracomment>
        <translation type="unfinished">Slicer 載入前列腺 MRI 資料集</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="50"/>
        <source>Click on Welcome to Slicer in the Modules&apos; menu and browse to the category Segmentation

Select the MONAIAuto3DSeg module</source>
        <extracomment>12_TextBox_0</extracomment>
        <translation type="unfinished">在「模組」選單中點選「歡迎使用 Slicer」，然後瀏覽至「分割」類別

選取 MONAIAuto3DSeg 模組</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="52"/>
        <source>Enter the model&apos;s name Prostate in the Segmentation model menu</source>
        <extracomment>13_TextBox_0</extracomment>
        <translation type="unfinished">在「分割模型」選單中輸入模型名稱「Prostate」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>Select the model Prostate - Multisequence</source>
        <extracomment>13_TextBox_1</extracomment>
        <translation type="unfinished">請選擇「前列腺 - 多序列」模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="56"/>
        <source>Enter the Input T2 volume msd-prostate-01-t2 and the Input ADC volume msd-prostate-01-adc</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation type="unfinished">請輸入 T2 影像集 msd-prostate-01-t2 以及 ADC 影像集 msd-prostate-01-adc</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Click on Create new segmentation on Apply</source>
        <extracomment>14_TextBox_1</extracomment>
        <translation type="unfinished">在「套用」處點選「建立新分群」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="60"/>
        <source>Slicer starts the inference</source>
        <extracomment>15_TextBox_0</extracomment>
        <translation type="unfinished">Slicer 開始進行推論</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="62"/>
        <source>Slicer shows the results of the AI-based prostate segmentation</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation type="unfinished">Slicer 顯示了基於人工智慧的前列腺分割結果</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="64"/>
        <source>AI Segmentation Task #2: Brain Glioma</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation type="unfinished">AI 分割任務 #2：腦膠質瘤</translation>
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
        <translation type="unfinished">基於人工智慧的腦部 MRI 影像中腫瘤、壞死及水腫分割。


資料集：
1) BraTS-GLI_00005-000-t1n（T1加權）
2) BraTS-GLI_00005-000-t1c（T1加權，釓增強後）
3) BraTS-GLI_00005-000-t2w（T2加權）
4) BraTS-GLI_00005-000-t2f（T2-FLAIR）</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="68"/>
        <source>Click on Add Data in the Welcome to Slicer module

Click on Choose File(s) to Add and browse to the location of the Slicer datasets

In the subdirectory dataset4_BrainMRI_Glioma, select the four datasets BraTS-GLI-00006-t1c.nii.gz, BraTS-GLI-00006-t1n.nii.gz, BraTS-GLI-00006-t2f.nii.gz, BraTS-GLI-00006-t2w.nii.gz

Click on Open</source>
        <extracomment>19_TextBox_1</extracomment>
        <translation type="unfinished">在「歡迎使用 Slicer」模組中點擊「新增資料」

點擊「選擇檔案以新增」，並瀏覽至 Slicer 資料集所在的位置

在子目錄 dataset4_BrainMRI_Glioma 中，選取以下四個資料集：BraTS-GLI-00006-t1c.nii.gz、 BraTS-GLI-00006-t1n.nii.gz、BraTS-GLI-00006-t2f.nii.gz、BraTS-GLI-00006-t2w.nii.gz

點擊「開啟」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="70"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Brain Tumor Segmentation in the Segmentation model menu</source>
        <extracomment>20_TextBox_0</extracomment>
        <translation type="unfinished">選取模組 MONAIAuto3DSeg，並在「分割模型」選單中輸入模型名稱「腦腫瘤分割」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>Select the model Brain Tumor Segmentation (BRATS) GLI</source>
        <extracomment>20_TextBox_1</extracomment>
        <translation type="unfinished">請選擇「腦瘤分割（BRATS）GLI」模型</translation>
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
        <translation type="unfinished">請依下列方式輸入影像檔：

輸入 T2F 影像檔：BraTS-GLI_00005-000-t2f
輸入 T1C 影像檔：BraTS-GLI_00005-000-t1c
輸入 T1N 影像集：BraTS-GLI_00005-000-t1n
輸入 T2W 影像集：BraTS-GLI_00005-000-t2w


在「套用」選項中點選「建立新分割」

點選「套用」以開始分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Slicer starts running the inference task

Once the segmentation is done, &apos;Processing finished&apos; appears in the Slicer GUI</source>
        <extracomment>22_TextBox_1</extracomment>
        <translation type="unfinished">Slicer 開始執行推論任務

一旦分割完成，Slicer 圖形使用者介面中便會顯示「處理完成」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="78"/>
        <source>Click on Show 3D to display the 3D segments in the 3D Viewer</source>
        <extracomment>23_TextBox_1</extracomment>
        <translation type="unfinished">點擊「顯示 3D」以在 3D 檢視器中顯示 3D 區段</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>AI Segmentation Task #3: Whole Body Segmentation</source>
        <extracomment>24_TextBox_0</extracomment>
        <translation type="unfinished">AI 分割任務 #3：全身分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="82"/>
        <source>AI-based Segmentation of the whole body.


Dataset:
CT_ThoraxAbdomen</source>
        <extracomment>25_TextBox_1</extracomment>
        <translation type="unfinished">基於人工智慧的全身分割。


資料集：
CT_ThoraxAbdomen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>In the Add DICOM Data module, select the Patient patient1 and double click onthe image CT_Thorax_Abdomen to load it in Slicer</source>
        <extracomment>26_TextBox_0</extracomment>
        <translation type="unfinished">在「新增 DICOM 資料」模組中，選取患者 patient1，並雙擊影像 CT_Thorax_Abdomen 以將其載入 Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="86"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Whole Body Segmentation in the Segmentation model menu</source>
        <extracomment>27_TextBox_0</extracomment>
        <translation type="unfinished">選取模組 MONAIAuto3DSeg，並在「分割模型」選單中輸入模型名稱「全身分割」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Select the model Whole Body Segmentation TS1-quick</source>
        <extracomment>27_TextBox_1</extracomment>
        <translation type="unfinished">請選擇「全身分割 TS1-quick」型號</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="90"/>
        <source>Select the input Volume 6:CT_Thorax_Abdomen,

Click on Create new Segmentation on Apply

Click on Apply to start the segmentation</source>
        <extracomment>28_TextBox_0</extracomment>
        <translation type="unfinished">選取輸入資料「Volume 6:CT_Thorax_Abdomen」，

在「套用」選項中點選「建立新分割」，

點選「套用」以開始分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="92"/>
        <source>Slicer displays the results of the AI-based segmentation using the Whole Body Segmentation TS1-quick</source>
        <extracomment>29_TextBox_0</extracomment>
        <translation type="unfinished">Slicer 會顯示使用「全身分割 TS1-quick」進行的人工智慧分割結果</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="94"/>
        <source>Conclusion</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation>結論</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>The 3D Slicer MONAIAuto3DSeg extension provides fast AI-based segmentation of anatomical and pathological structures.


The module can run on standard laptop and desktop computers with no GPU.</source>
        <extracomment>30_TextBox_1</extracomment>
        <translation type="unfinished">3D Slicer 的 MONAIAuto3DSeg 擴充套件可提供基於人工智慧的解剖學與病理學結構快速分割功能。


此模組可在未配備 GPU 的標準筆記型電腦及桌上型電腦上運行。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="98"/>
        <source>Acknowledgements</source>
        <extracomment>31_TextBox_0</extracomment>
        <translation>致謝</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="100"/>
        <source>The 3D Slicer internationalization project and the 3D Slicer for Latin America project have been made possible through funding by the Chan Zuckerberg Initiative.</source>
        <extracomment>31_TextBox_1</extracomment>
        <translation type="unfinished">「3D Slicer 國際化計畫」與「拉丁美洲 3D Slicer 計畫」得以實現，全賴陳-祖克柏倡議（Chan Zuckerberg Initiative）的資助。</translation>
    </message>
</context>
</TS>
