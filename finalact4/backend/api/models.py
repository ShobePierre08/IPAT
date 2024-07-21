from django.db import models

class Item(models.Model):
    Fname = models.CharField(max_length=100, null=True)
    Mname = models.CharField(max_length=100, null=True)
    Lname = models.CharField(max_length=100, null=True)
    Address = models.CharField(max_length=150, null=True)
    Email = models.EmailField(max_length=150, null=True)
    Phone = models.CharField(max_length=100, null=True)
    Municipality = models.CharField(max_length=150, null=True)
    Baranggay = models.CharField(max_length=100, null=True)
    Dbirth = models.DateField(default='2000-01-01', null=True)
    Sex = models.CharField(max_length=100, null=True)
    Cstatus = models.CharField(max_length=100, null=True)
    Height = models.FloatField(blank=True, null=True)
    Weight = models.FloatField(blank=True, null=True)
    Btype = models.CharField(max_length=100, null=True)
    FatherFN = models.CharField(max_length=100, null=True)
    FatherMN = models.CharField(max_length=100, null=True)
    FatherLN = models.CharField(max_length=150, null=True)
    MotherFN = models.CharField(max_length=100, null=True)
    MotherMN = models.CharField(max_length=100, null=True)
    MotherLN = models.CharField(max_length=100, null=True)
    MotherMaidenN = models.CharField(max_length=100, null=True)
    Elementary = models.CharField(max_length=150, null=True)
    Secondary = models.CharField(max_length=100, null=True)
    Vcourse = models.CharField(max_length=100, null=True)
    College = models.CharField(max_length=100, null=True)
    Citizenship = models.CharField(max_length=100, null=True)
   
    
    def __str__(self):
        return self.Fname