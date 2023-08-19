FROM eclipse-temurin:17-jre-alpine
ENV DBUSERNAME=${DBUSERNAME}
ENV DBPASSWORD=${DBPASSWORD}
ENV SMTPUSERNAME=${SMTPUSERNAME}
ENV SMTPPASSWORD=${SMTPPASSWORD}
EXPOSE 8080
ADD target/0x9_StellerVoyage_Api.jar 0x9_StellerVoyage_Api.jar
ENTRYPOINT ["java", "-jar","/0x9_StellerVoyage_Api.jar"]